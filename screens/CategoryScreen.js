import { CATEGORIES } from '../data/dummyData'
import { FlatList, View } from 'react-native'
import CategoryGrid from '../components/CategoryGrid'



export default function CategoryScreen({ navigation }) {

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId : itemData.item.id
      })
    }
    return <CategoryGrid title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  
  }

  return (
    <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem} numColumns={2} />
  )
}
