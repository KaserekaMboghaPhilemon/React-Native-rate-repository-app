// src/components/RepositoryItem.jsx
import { View, Image, StyleSheet, Platform } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  fullName: {
    color: theme.colors.textPrimary,
    fontFamily:
      theme.fontFamilies?.medium ||
      theme.fonts?.main ||
      Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: "System",
      }),
    fontSize: theme.fontSizes?.heading || 18,
    marginBottom: 6,
  },
  description: {
    marginBottom: 10,
  },
  languageBadge: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count ? count.toString() : "0";
};

const RepositoryItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.avatar} source={{ uri: item?.ownerAvatarUrl }} />
        <View style={styles.infoContainer}>
          <Text style={styles.fullName}>{item?.fullName}</Text>
          <Text style={styles.description} color="textSecondary">
            {item?.description}
          </Text>
          <View style={styles.languageBadge}>
            <Text color="textWhite">{item?.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item?.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item?.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item?.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item?.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
