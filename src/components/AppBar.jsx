import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useLocation } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab.jsx";

const tabs = [
  { title: "Repositories", to: "/" },
  { title: "Sign in", to: "/signin" },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 14,
  },
  tabs: {
    paddingHorizontal: 16,
    gap: 24,
  },
});

const AppBar = () => {
  const { pathname } = useLocation();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
      >
        {tabs.map((tab) => (
          <AppBarTab
            key={tab.title}
            title={tab.title}
            to={tab.to}
            active={pathname === tab.to}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;
