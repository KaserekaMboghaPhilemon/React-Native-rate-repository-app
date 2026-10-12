import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import Text from "./Text";

const getVariables = (sortOption) => {
  switch (sortOption) {
    case "highest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      };
    case "lowest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };
    default:
      return {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      };
  }
};

const styles = StyleSheet.create({
  message: {
    alignItems: "center",
    padding: 20,
  },
  messageText: {
    marginTop: 8,
    textAlign: "center",
  },
  pickerContainer: {
    backgroundColor: "white",
  },
});

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState("latest");
  const { repositories, loading, error } = useRepositories(
    getVariables(sortOption)
  );

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
      ListHeaderComponent={
        <View style={styles.pickerContainer}>
          <Picker selectedValue={sortOption} onValueChange={setSortOption}>
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highest" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
          </Picker>
        </View>
      }
    />
  );
};

export default RepositoryList;
