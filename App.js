import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./screens/Categories";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();
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
            name="Categories"
            component={Categories}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={{ title: "Meals" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
