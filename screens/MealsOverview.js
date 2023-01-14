import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealRecipe from "./MealRecipe";

function MealsOverview({ route, navigation }) {
  const { categoryId } = route.params;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const displayMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  function navigateToMealRecipe(id) {
    navigation.navigate("MealRecipe", {
      id: id,
    });
  }

  function renderMealItem(itemData) {
    return (
      <>
        <MealItem
          meal={itemData.item}
          onPress={navigateToMealRecipe.bind(this, itemData.item.id)}
        />
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayMeal}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
