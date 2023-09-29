import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
import { MEALS, CATEGORIES } from "../data/dummyData";

export default function MealsOverviewScreen({route , navigation}) {

    const mealId = route.params.categoryId

    const displayedMeal = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(mealId) >= 0
    })

   

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category)=> category.id === mealId).title
        navigation.setOptions({
            title : catTitle
        })
    }, [mealId, navigation])
    
    return(
        <MealsList items={displayedMeal}/>
    )

   
}


