import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy-data";

function Categories({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }

    return (
      <CategoryItem
        onPress={pressHandler}
        color={item.color}
        title={item.title}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Categories;
