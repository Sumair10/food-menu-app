import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGrid({title , color , onPress}) {
  const navigation = useNavigation()
  return (
    <View style={[styles.gridItem , {backgroundColor : color}]}>
        <Pressable onPress={onPress} android_ripple={{color :'#cccccc'}} style={({pressed})=> [styles.buttonStyle ,  pressed ? styles.buttonPressed : null]}>
            <View style={styles.innerConatiner}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>    
  )
}

const styles = StyleSheet.create({
   gridItem : {
    flex :1,
    margin :16,
    height :150,
    borderRadius :8,
    elevation :10,
    backgroundColor :'white',
    overflow :'hidden'
   },
   buttonStyle :{
    flex :1
   },
   buttonPressed :{
    opacity :0.5
   },
   innerConatiner :{
    flex :1,
    padding :16,
    justifyContent :'center',
    alignItems :'center'
   },
   title :{
    fontWeight :'bold',
    fontSize :18
   }
})
