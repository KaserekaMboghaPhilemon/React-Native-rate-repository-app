// src/components/Main.jsx
import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import SignIn from "./SignIn.jsx";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
