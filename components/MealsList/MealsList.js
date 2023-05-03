import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealsList({items}) {
    function renderMealItem(itemData) {

        return (
            <>
                <MealItem meal={itemData.item}/>
            </>
        );
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderMealItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsList