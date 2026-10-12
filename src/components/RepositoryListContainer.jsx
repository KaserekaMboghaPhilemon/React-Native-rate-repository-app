import { FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
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

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  return (
    <FlatList
      data={repositories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <Text style={styles.messageText}>No repositories found.</Text>
      }
    />
  );
};

export default RepositoryListContainer;
