// src/components/AppBar.jsx
import { View, StyleSheet, ScrollView } from "react-native";
import { useLocation } from "react-router-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground || "#24292e",
  },
  scrollView: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { pathname } = useLocation();

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab title="Repositories" to="/" isActive={pathname === "/"} />
        <AppBarTab
          title="Sign in"
          to="/signin"
          isActive={pathname === "/signin"}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
