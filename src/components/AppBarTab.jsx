import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

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

const AppBarTab = ({ title, to, active = false }) => (
  <Link
    to={to}
    component={Pressable}
    accessibilityRole="tab"
    accessibilityState={{ selected: active }}
    style={[styles.tab, active && styles.activeTab]}
  >
    <Text color="white" fontWeight="bold" fontSize="subheading">
      {title}
    </Text>
  </Link>
);

export default AppBarTab;
