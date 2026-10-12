import { StyleSheet, View } from "react-native";
import { format } from "date-fns";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
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
});

const ReviewItem = ({ review }) => (
  <View style={styles.container}>
    <View style={styles.rating}>
      <Text style={styles.ratingText}>{review.rating}</Text>
    </View>
    <View style={styles.details}>
      <Text fontWeight="bold">{review.user.username}</Text>
      <Text style={styles.date} color="textSecondary">
        {format(new Date(review.createdAt), "dd MMM yyyy")}
      </Text>
      <Text>{review.text}</Text>
    </View>
  </View>
);

export default ReviewItem;
