import { StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Button(props) {
  return (
    <Pressable
      style={[({ pressed }) => pressed && styles.pressed, props.style]}
      onPress={props.onPress}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default Button;
