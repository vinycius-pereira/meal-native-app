import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  Pressable,
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
      <Pressable
        android_ripple={{ color: "#ccc", borderless: true }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <ScrollView style={styles.screen}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.container}>
            <Text style={styles.pill}>{mealPrice()}</Text>
            <View style={styles.innerContainer}>
              <Text style={styles.pill}>{`${duration} min`}</Text>
              <Text style={styles.pill}>{complexity}</Text>
            </View>
          </View>
          {/*<View>*/}
          {/*  <Text style={styles.secondaryTitle}>Ingredients</Text>*/}
          {/*  <FlatList*/}
          {/*    style={styles.listContainer}*/}
          {/*    data={ingredients}*/}
          {/*    renderItem={renderMealIngredients}*/}
          {/*    ItemSeparatorComponent={() => <View style={styles.separator} />}*/}
          {/*    keyExtractor={(item) => item}*/}
          {/*  />*/}
          {/*  <Text style={styles.secondaryTitle}>Steps</Text>*/}
          {/*  <FlatList*/}
          {/*    style={styles.listContainer}*/}
          {/*    data={steps}*/}
          {/*    renderItem={renderMealSteps}*/}
          {/*    ItemSeparatorComponent={() => <View style={styles.separator} />}*/}
          {/*    keyExtractor={(item) => item}*/}
          {/*  />*/}
          {/*</View>*/}
        </ScrollView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    paddingBottom: 8,
    backgroundColor: "#efefef",
    borderRadius: 12,
    elevation: 4,
  },
  screen: {
    flex: 1,
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
    marginBottom: 6,
    marginHorizontal: 10,
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
    marginHorizontal: 10,
    marginVertical: 8,
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
  pressed: {
    opacity: 0.9,
  },
});

export default MealItem;
