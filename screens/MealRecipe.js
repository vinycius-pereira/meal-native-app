import { Text, View } from "react-native";

function MealRecipe({ route, navigation }) {
  const { id } = route.params;

  return (
    <View>
      <Text>{`MealRecipe render ${id}`}</Text>
    </View>
  );
}

export default MealRecipe;
