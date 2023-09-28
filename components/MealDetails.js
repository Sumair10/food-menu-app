
import { StyleSheet, View,Text } from 'react-native'

export default function MealDetails({duration , complexity, affordability}) {
  return (
    <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity}</Text>
                <Text style={styles.detailItem}>{affordability}</Text>
            </View>
  )
}

const styles = StyleSheet.create({
    details :{
        flexDirection:'row',
        alignItems :'center',
        padding :8,
        justifyContent :'center'
    },
    detailItem : {
        marginHorizontal :4,
        fontSize :12
    }
})