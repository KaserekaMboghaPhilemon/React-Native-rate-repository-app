import { ActivityIndicator, StyleSheet, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import Text from "./Text";

const styles = StyleSheet.create({
  message: {
    alignItems: "center",
    padding: 20,
  },
  messageText: {
    marginTop: 8,
    textAlign: "center",
  },
});

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading && !repositories) {
    return (
      <View style={styles.message}>
        <ActivityIndicator />
        <Text style={styles.messageText}>Loading repositories...</Text>
      </View>
    );
  }

  if (error && !repositories) {
    return (
      <View style={styles.message}>
        <Text>Unable to load repositories.</Text>
        <Text style={styles.messageText}>{error.message}</Text>
      </View>
    );
  }

  return (
    <RepositoryListContainer
      repositories={
        repositories ? repositories.edges.map((edge) => edge.node) : []
      }
    />
  );
};

export default RepositoryList;
