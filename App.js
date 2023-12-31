import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavouritesContextProvider from "./store/context/FavouriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: 'black' },
    headerTintColor: 'white',
    sceneContainerStyle: {
      backgroundColor: 'black'
    },
    drawerContentStyle: {
      backgroundColor: 'black',
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: 'black',
    drawerActiveBackgroundColor: 'white'


  }}>
    <Drawer.Screen name='Categories' component={CategoryScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
    }} />
    <Drawer.Screen name='Favourites' component={FavouritesScreen}
      options={{
        title: 'Favourites',
        drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
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
            headerShown: false
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
          // options={({route , navigation})=>{
          //   const catId = route.params.categoryId
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
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  a: {
    fontSize: 500,
    color: 'white'
  }
});
