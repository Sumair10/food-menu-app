import { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummyData'
import { FavouritesContext } from '../store/context/FavouriteContext'

export default function FavouritesScreen() {

  const favouriteMealsCtx = useContext(FavouritesContext)

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

  if(favouriteMeals.length === 0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals yet.</Text>
    </View>
  }


  return (
    <MealsList  items={favouriteMeals}/>
  )
}


const styles =StyleSheet.create({
  rootContainer : {
    flex :1,
    justifyContent :'center',
    alignItems :'center'
  },
  text : {
    fontSize :18,
    fontWeight :'bold',
    color :'white'

  }
})
