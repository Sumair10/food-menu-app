import { Pressable, StyleSheet, Text } from "react-native";


export default function IconButton({onPress}) {
  return (
   <Pressable onPress={onPress} style={({pressed}) => pressed && styles.onPressed}><Text style={styles.text}>Start</Text></Pressable>
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
