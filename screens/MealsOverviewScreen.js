import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
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
    

    const renderMealItem =(itemData)=>{
        const item = itemData.item
        const mealItemProps ={
            id :item.id,
            title :item.title,
            imageUrl :item.imageUrl,
            affordability : item.affordability,
            complexity :item.complexity,
            duration :item.duration
        }
        return <MealItem {...mealItemProps} />
    }

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeal} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
  )
}

const styles =StyleSheet.create({
    container :{
        flex :1,
        padding: 16
    }
})
