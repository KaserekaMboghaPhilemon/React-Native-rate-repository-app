// src/components/AppBarTab.jsx
import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ title }) => {
  return (
    <Pressable style={styles.tab}>
      <Text color="white" fontWeight="bold" fontSize="subheading">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
