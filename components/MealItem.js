import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import MealCard from "./MealCard";

function MealItem({ meal, onPress }) {
  const { affordability, title, duration, complexity, imageUrl } = meal;

  function mealPrice() {
    if (affordability === "luxurious") {
      return "$$$";
    } else if (affordability === "pricey") {
      return "$$";
    } else {
      return "$";
    }
  }

  return (
    <>
      <View style={styles.root}>
        <Pressable
          android_ripple={{ color: "#ccc", borderless: true }}
          style={({ pressed }) => pressed && styles.pressed}
          onPress={onPress}
        >
          <ScrollView style={styles.screen}>
            <MealCard
              complexity={complexity}
              title={title}
              duration={duration}
              imageUrl={imageUrl}
              affordability={affordability}
            />
          </ScrollView>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 32,
    backgroundColor: "#efefef",
    borderRadius: 12,
    elevation: 4,
  },
  screen: {
    flex: 1,
  },
  pressed: {
    opacity: 0.9,
  },
});

export default MealItem;
