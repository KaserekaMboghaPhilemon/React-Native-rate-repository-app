// src/components/AppBar.jsx
import { useApolloClient, useQuery } from "@apollo/client";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

const AppBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = useQuery(GET_CURRENT_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/signin");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab title="Repositories" to="/" active={pathname === "/"} />
        {data?.me ? (
          <>
            <AppBarTab
              title="Create a review"
              to="/create-review"
              active={pathname === "/create-review"}
            />
            <AppBarTab
              title="My reviews"
              to="/my-reviews"
              active={pathname === "/my-reviews"}
            />
            <AppBarTab title="Sign out" onPress={handleSignOut} />
          </>
        ) : (
          <>
            <AppBarTab
              title="Sign in"
              to="/signin"
              active={pathname === "/signin"}
            />
            <AppBarTab
              title="Sign up"
              to="/signup"
              active={pathname === "/signup"}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
