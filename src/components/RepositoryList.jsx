import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  list: {
    paddingVertical: 0,
  },
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
    <FlatList
      data={repositories ? repositories.edges.map((edge) => edge.node) : []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <Text style={styles.messageText}>No repositories found.</Text>
      }
    />
  );
};

export default RepositoryList;
