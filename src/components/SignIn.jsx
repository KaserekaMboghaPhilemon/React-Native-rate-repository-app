import { Formik } from "formik";
import * as yup from "yup";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffffff",
  },
  field: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 15,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontFamilies.regular,
  },
  inputError: {
    borderColor: "#d73a4a",
  },
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
});

const SignInForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const usernameError = touched.username && errors.username;
  const passwordError = touched.password && errors.password;

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          style={[styles.input, usernameError && styles.inputError]}
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange("username")}
          onBlur={handleBlur("username")}
        />
        {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
      </View>

      <View style={styles.field}>
        <TextInput
          style={[styles.input, passwordError && styles.inputError]}
          placeholder="Password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange
      onSubmit={onSubmit}
    >
      {(formikProps) => <SignInForm {...formikProps} />}
    </Formik>
  );
};

export default SignIn;
