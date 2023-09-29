import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";


export default function IconButton({onPress , icon , color}) {
  return (
   <Pressable onPress={onPress} style={({pressed}) => pressed && styles.onPressed}><Ionicons name={icon} size={24} color={color} /></Pressable>
  )
}

const styles =StyleSheet.create({
    text :{
        color:'white'
    },
    onPressed :{
        opacity :0.6
    }
})
