import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

export default function MealItem({ id ,title, imageUrl , duration , complexity, affordability}) {
    const navigation = useNavigation()

    

    const mealItemHandler =()=>{
        navigation.navigate('MealsDetail' , {
            mealId : id
        })
    }
  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color : '#cccccc'}}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
        onPress={mealItemHandler}
        >
           <View style={styles.innerContainer}>
           <View>
                <Image source={{uri : imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration}  complexity={complexity} affordability={affordability} />
           </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

    mealItem :{
        margin : 16,
        borderRadius :8,
        overflow :'hidden',
        backgroundColor :'white',
        elevation :6
    },  
    innerContainer:{
        borderRadius :8,
        overflow :'hidden'
    },
    buttonPressed :{
        opacity :0.5
    },
    image :{
        width :'100%',
        height :200
    },
    title :{
        fontWeight :'bold',
        textAlign :'center',
        fontSize :18,
        margin: 8
    },
})