import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

import theme from "../theme";
import AppBarTab from "./AppBarTab.jsx";

const tabs = ["Repositories", "Sign in"];
const paths = ["/", "/signin"];

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
        {tabs.map((tab, index) => (
          <Link key={tab} to={paths[index]}>
            <AppBarTab title={tab} active={pathname === paths[index]} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;
