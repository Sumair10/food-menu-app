import { useContext, useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton'
import List from '../components/List'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummyData'
import { FavouritesContext } from '../store/context/FavouriteContext'

export default function MealDetailScreen({ route, navigation }) {
    const favouriteMealsContext = useContext(FavouritesContext)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    const mealIsFavourite = favouriteMealsContext.ids.includes(mealId)

    const headerButtonPressHandler =()=>{
        if(mealIsFavourite){
            favouriteMealsContext.removeFavourite(mealId)
        }
        else{
            favouriteMealsContext.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : ()=>{
                return <IconButton icon ={mealIsFavourite ? 'star' : 'star-outline'} color='white' onPress={headerButtonPressHandler}/>
            }
        })
    }, [navigation , headerButtonPressHandler])

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title} </Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.listOuterContainer}>

                <View style={styles.listContainer}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Ingrediants</Text>
                    </View>
                    <List data={selectedMeal.ingredients} />
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Steps</Text></View>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})
