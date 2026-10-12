import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error, fetchMore } = useRepository(id);

  const handleFetchMore = () => {
    if (!repository?.reviews?.pageInfo?.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        id,
        after: repository.reviews.pageInfo.endCursor,
        first: 4,
      },
    });
  };

  if (loading && !repository) {
    return <Text>Loading repository...</Text>;
  }

  if (error && !repository) {
    return <Text>Unable to load repository: {error.message}</Text>;
  }

  const reviews = repository?.reviews?.edges.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <>
          <RepositoryItem item={repository} showGithubButton />
          <View style={styles.separator} />
        </>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default SingleRepository;
