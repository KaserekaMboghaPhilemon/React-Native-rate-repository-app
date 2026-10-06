import { FlatList, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  list: {
    paddingVertical: 0,
  },
});

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories ? repositories.edges.map((edge) => edge.node) : []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

export default RepositoryList;
