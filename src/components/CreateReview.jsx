import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),
  text: yup.string(),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  input: {
    borderColor: "#a0a0a0",
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginTop: 5,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const data = await createReview(values);
    navigate(`/repository/${data.repositoryId}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            placeholder="Owner name"
            style={styles.input}
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
            style={styles.input}
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating (0-100)"
            keyboardType="numeric"
            style={styles.input}
          />
          <FormikTextInput
            name="text"
            placeholder="Review"
            multiline
            style={[styles.input, styles.textArea]}
          />
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Create a review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default CreateReview;
