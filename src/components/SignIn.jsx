import { StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const SignIn = () => <Text style={styles.container}>The sign-in view</Text>;

export default SignIn;
