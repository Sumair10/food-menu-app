import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator =()=>{
  return <Drawer.Navigator>
    <Drawer.Screen name='Categories' component={CategoryScreen}/>
    <Drawer.Screen name='Favourites' component={FavouritesScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'black'
          }
        }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
            // title: 'All Categories',
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={({route , navigation})=>{
          //   const catId = route.params.categoryId
          //   return {
          //       title : catId
          //   }
          // }}

          />
           <Stack.Screen name="MealsDetail" component={MealDetailScreen} options={{
            title: 'Meal Detail',
            contentStyle: {
              backgroundColor: 'white'
            },
            // headerRight: ()=>{
            //   return <Button title='Tap me'/>
            // }

          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
