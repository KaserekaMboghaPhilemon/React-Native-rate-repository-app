import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    minHeight: 32,
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  activeTab: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
  },
});

const AppBarTab = ({ title, active = false, onPress }) => (
  <Pressable
    accessibilityRole="tab"
    accessibilityState={{ selected: active }}
    onPress={onPress}
    style={({ pressed }) => [
      styles.tab,
      active && styles.activeTab,
      pressed && { opacity: 0.7 },
    ]}
  >
    <Text color="white" fontWeight="bold" fontSize="subheading">
      {title}
    </Text>
  </Pressable>
);

export default AppBarTab;
