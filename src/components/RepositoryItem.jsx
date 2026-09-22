import { Image, StyleSheet, View } from "react-native";

import Text from "./Text";
import theme from "../theme";

const formatCount = (count) =>
  count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    padding: 15,
    flexDirection: "row",
  },
  avatar: {
    borderRadius: 28,
    height: 56,
    width: 56,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  fullName: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamilies.medium,
    fontSize: theme.fontSizes.heading,
    marginBottom: 6,
  },
  description: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fontFamilies.regular,
    fontSize: theme.fontSizes.body,
    lineHeight: 20,
    marginBottom: 10,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: "#ffffff",
    fontFamily: theme.fontFamilies.medium,
    fontSize: 12,
    marginBottom: 14,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statistic: {
    alignItems: "center",
    minWidth: 54,
  },
  statisticValue: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamilies.medium,
    fontSize: theme.fontSizes.subheading,
  },
  statisticLabel: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fontFamilies.regular,
    fontSize: 12,
    marginTop: 3,
  },
});

const Statistic = ({ value, label }) => (
  <View style={styles.statistic}>
    <Text style={styles.statisticValue}>{value}</Text>
    <Text style={styles.statisticLabel}>{label}</Text>
  </View>
);

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}) => (
  <View style={styles.container}>
    <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
    <View style={styles.details}>
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.language}>{language}</Text>
      <View style={styles.statistics}>
        <Statistic value={formatCount(stargazersCount)} label="Stars" />
        <Statistic value={formatCount(forksCount)} label="Forks" />
        <Statistic value={formatCount(reviewCount)} label="Reviews" />
        <Statistic value={formatCount(ratingAverage)} label="Rating" />
      </View>
    </View>
  </View>
);

export default RepositoryItem;
