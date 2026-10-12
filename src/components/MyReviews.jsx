import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, View } from "react-native";
import { GET_CURRENT_USER } from "../graphql/queries";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  message: {
    alignItems: "center",
    padding: 20,
  },
  messageText: {
    marginTop: 8,
    textAlign: "center",
  },
  separator: {
    height: 10,
  },
  review: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
  },
  rating: {
    alignItems: "center",
    borderColor: theme.colors.primary,
    borderRadius: 22.5,
    borderWidth: 2,
    height: 45,
    justifyContent: "center",
    marginRight: 15,
    width: 45,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  details: {
    flex: 1,
  },
  date: {
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginTop: 12,
    padding: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const MyReviews = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading && !data) {
    return (
      <View style={styles.message}>
        <ActivityIndicator />
        <Text style={styles.messageText}>Loading reviews...</Text>
      </View>
    );
  }

  if (error && !data) {
    return (
      <View style={styles.message}>
        <Text>Unable to load reviews.</Text>
        <Text style={styles.messageText}>{error.message}</Text>
      </View>
    );
  }

  const reviews = data?.me?.reviews?.edges.map((edge) => edge.node) ?? [];

  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <Text style={styles.messageText}>You have not written any reviews.</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.review}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <View style={styles.details}>
            <Text fontWeight="bold">{item.repository.fullName}</Text>
            <Text style={styles.date} color="textSecondary">
              {format(new Date(item.createdAt), "dd MMM yyyy")}
            </Text>
            <Text>{item.text}</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => navigate(`/repository/${item.repository.id}`)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>View repository</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

export default MyReviews;
