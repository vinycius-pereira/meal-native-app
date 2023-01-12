import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
function CategoryItem(props) {
  const { width, height } = useWindowDimensions();

  const dynamicSize = width < 400 ? 125 : 150;

  return (
    <View style={[styles.root, { backgroundColor: props.color }]}>
      <Pressable
        android_ripple={{ color: "#ccc", borderless: true }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    height: 150,
    elevation: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryItem;
