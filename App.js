import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories";
import Favorites from "./screens/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverview from "./screens/MealsOverview";
import MealRecipe from "./screens/MealRecipe";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: "#654a30" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#c59356" },
            sceneContainerStyle: { backgroundColor: "#c59356" },
            drawerContentStyle: { backgroundColor: "#654a30" },
            drawerInactiveTintColor: "white",
            drawerActiveTintColor: "#c2a685"
        }}
    >
      <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
              title: 'All Categories',
              drawerIcon: ({color, size}) => (
                  <Ionicons name="list" color={color} size={size}/>
              )
      }}/>
      <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
              drawerIcon: ({color, size}) => (
                  <Ionicons name="star" color={color} size={size}/>
              )
          }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#9a7449" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#c59356" },
            }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
                headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="MealRecipe" component={MealRecipe} options={{title: "Meal Recipe"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
