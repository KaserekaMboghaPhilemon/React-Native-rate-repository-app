// src/components/SignIn.jsx
import { View, TextInput, Pressable, StyleSheet, Platform } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffffff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: theme.fontSizes?.body || 14,
    fontFamily:
      theme.fonts?.main ||
      Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: "System",
      }),
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="textWhite" fontWeight="bold">
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
