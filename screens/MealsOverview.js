import { MEALS } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  const { categoryId } = route.params;

  const displayMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeal}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
