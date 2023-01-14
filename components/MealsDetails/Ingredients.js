import { StyleSheet, Text, View } from "react-native";

function Ingredients({ ingredients }) {
  return (
    <View style={styles.listContainer}>
      {ingredients.map((ingredient) => (
        <>
          <View key={Math.random()}>
            <Text style={styles.title}>{`\u2022 ${ingredient}`}</Text>
          </View>
          <View style={styles.separator} />
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  listContainer: {
    backgroundColor: "#9a7449",
    borderColor: "#9a7449",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 12,
  },
  separator: {
    margin: 2,
  },
});

export default Ingredients;
