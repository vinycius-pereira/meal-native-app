import { StyleSheet, Image, Text, View } from "react-native";
import mealPrice from "../utils/mealPrice";

function MealCard({ imageUrl, title, duration, complexity, affordability }) {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <Text style={styles.pill}>{mealPrice(affordability)}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.pill}>{`${duration} MIN`}</Text>
          <Text style={styles.pill}>{complexity.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#e1cbaf",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 6,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
  },
  pill: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9a7449",
    color: "white",
    fontWeight: "bold",
    borderColor: "#9a7449",
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default MealCard;
