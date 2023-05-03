import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

  return (
      <MealsList items={displayMeal}/>
  )
}

export default MealsOverview;
