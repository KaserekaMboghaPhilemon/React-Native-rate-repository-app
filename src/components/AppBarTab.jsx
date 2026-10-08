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

const AppBarTab = ({ title, to, active = false, onPress }) => {
  const content = (
    <Text color="white" fontWeight="bold" fontSize="subheading">
      {title}
    </Text>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="tab"
        style={styles.tab}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <Link
      to={to}
      component={Pressable}
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      style={[styles.tab, active && styles.activeTab]}
    >
      {content}
    </Link>
  );
};

export default AppBarTab;
