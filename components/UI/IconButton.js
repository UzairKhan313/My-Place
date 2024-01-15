import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        name={icon}
        size={size}
        color={color}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
