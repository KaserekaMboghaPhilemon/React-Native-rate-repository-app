import { TextInput } from "react-native";
import { useField } from "formik";

const FormikTextInput = ({ name, ...props }) => {
  const [field, , helpers] = useField(name);

  return (
    <TextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      {...props}
    />
  );
};

export default FormikTextInput;