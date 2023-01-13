import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
} from "react-native";

function MealItem({ meal }) {
  const {
    affordability,
    title,
    duration,
    complexity,
    ingredients,
    imageUrl,
    steps,
  } = meal;
  function renderMealIngredients({ item }) {
    return (
      <View>
        <Text style={styles.tertiaryTile}>{`\u2022 ${item}`}</Text>
      </View>
    );
  }

  function renderMealSteps(item) {
    return (
      <View>
        <Text style={styles.tertiaryTile}>{`${item.index + 1}. ${
          item.item
        }`}</Text>
      </View>
    );
  }

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
    <View style={styles.root}>
      <ScrollView style={styles.screen}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container}>
          <Text style={styles.pill}>{mealPrice()}</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.pill}>{duration}</Text>
            <Text style={styles.pill}>{complexity}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.secondaryTitle}>Ingredients</Text>
          <FlatList
            style={styles.listContainer}
            data={ingredients}
            renderItem={renderMealIngredients}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item}
          />
          <Text style={styles.secondaryTitle}>Steps</Text>
          <FlatList
            style={styles.listContainer}
            data={steps}
            renderItem={renderMealSteps}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  screen: {
    flex: 1,
  },
  image: {
    width: 325,
    height: 325,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },
  secondaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  tertiaryTile: {
    fontSize: 16,
    fontWeight: "400",
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
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 6,
  },
  listContainer: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginVertical: 12,
  },
  separator: {
    margin: 2,
  },
});

export default MealItem;
