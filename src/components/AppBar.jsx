// src/components/AppBar.jsx
import { useApolloClient, useQuery } from "@apollo/client";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLocation } from "react-router-native";
import Constants from "expo-constants";
import useAuthStorage from "../hooks/useAuthStorage";
import { GET_CURRENT_USER } from "../graphql/queries";
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
  const { data } = useQuery(GET_CURRENT_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab title="Repositories" to="/" active={pathname === "/"} />
        {data?.me ? (
          <AppBarTab title="Sign out" onPress={signOut} />
        ) : (
          <AppBarTab
            title="Sign in"
            to="/signin"
            active={pathname === "/signin"}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
