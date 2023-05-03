import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import MealCard from "../MealCard";
import {useNavigation} from "@react-navigation/native";

function MealItem({ meal }) {
  const { id, affordability, title, duration, complexity, imageUrl } = meal;
  const navigation = useNavigation()

  function navigateToMealRecipe() {
    navigation.navigate("MealRecipe", {
      mealId: id,
    });
  }


  return (
    <>
      <View style={styles.root}>
        <Pressable
          android_ripple={{ color: "#ccc", borderless: true }}
          style={({ pressed }) => pressed && styles.pressed}
          onPress={navigateToMealRecipe}
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
