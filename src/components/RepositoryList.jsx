import { FlatList, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    stargazersCount: 21553,
    forksCount: 1589,
    reviewCount: 4,
    ratingAverage: 88,
  },
  {
    id: "async-library.react-async",
    fullName: "async-library/react-async",
    ownerAvatarUrl: "https://avatars.githubusercontent.com/u/25700946?v=4",
    description: "Flexible promise-based React data loader",
    language: "JavaScript",
    stargazersCount: 1897,
    forksCount: 69,
    reviewCount: 3,
    ratingAverage: 100,
  },
  {
    id: "kentcdodds.react-testing-library",
    fullName: "kentcdodds/react-testing-library",
    ownerAvatarUrl: "https://avatars.githubusercontent.com/u/1500684?v=4",
    description: "Simple and complete React DOM testing utilities",
    language: "JavaScript",
    stargazersCount: 17800,
    forksCount: 900,
    reviewCount: 7,
    ratingAverage: 73,
  },
];

const styles = StyleSheet.create({
  list: {
    paddingVertical: 0,
  },
});

const RepositoryList = () => (
  <FlatList
    data={repositories}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <RepositoryItem item={item} />}
    contentContainerStyle={styles.list}
  />
);

export default RepositoryList;
