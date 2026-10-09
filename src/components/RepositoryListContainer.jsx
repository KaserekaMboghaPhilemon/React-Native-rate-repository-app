import { FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  list: {
    paddingVertical: 0,
  },
  messageText: {
    marginTop: 8,
    textAlign: "center",
  },
});

const RepositoryListContainer = ({ repositories }) => (
  <FlatList
    data={repositories}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <RepositoryItem item={item} />}
    contentContainerStyle={styles.list}
    ListEmptyComponent={
      <Text style={styles.messageText}>No repositories found.</Text>
    }
  />
);

export default RepositoryListContainer;
