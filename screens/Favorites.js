import {StyleSheet, Text, View} from 'react-native'
import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";

function Favorites() {
    const favoritesMealsCtx = useContext(FavoritesContext)
    const favoritesMeals = MEALS.filter((meal) =>  favoritesMealsCtx.ids.includes(meal.id))

    if(favoritesMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return <MealsList items={favoritesMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Favorites;