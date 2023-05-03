import { StyleSheet, FlatList, Text, View, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import Ingredients from "../components/MealsDetails/Ingredients";
import Steps from "../components/MealsDetails/Steps";
import {useContext, useLayoutEffect, useState} from "react";
import Button from "../components/Button";
import {FavoritesContext} from "../store/context/favorites-context";
import meal from "../models/meal";

function MealRecipe({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log("MEALITEM -> ", selectedMeal)

  const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  const changeFavoriteStatusHandler = () => {
    if(mealsIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId)
    } else {
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            icon={mealsIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const {
    ingredients,
    steps,
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
  } = selectedMeal;

  console.log("selectedMeal => ",selectedMeal)

  return (
    <View style={styles.root}>
      <ScrollView style={styles.screen}>
        <MealCard
          title={title}
          complexity={complexity}
          imageUrl={imageUrl}
          duration={duration}
          affordability={affordability}
        />
        <View style={styles.container}>
          <Text style={styles.secondaryTitle}>Ingredients</Text>
          <Ingredients ingredients={ingredients} />
          <Text style={styles.secondaryTitle}>Steps</Text>
          <Steps steps={steps} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    paddingBottom: 8,
    backgroundColor: "#e1cbaf",
    borderRadius: 12,
    elevation: 4,
  },
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  secondaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
});

export default MealRecipe;
