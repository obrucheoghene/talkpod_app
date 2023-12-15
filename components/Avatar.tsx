import { Image, StyleSheet, Text, View } from 'react-native'
import pic from '../assets/pic.jpg'

export const Avatar = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.text}>T</Text> */}
        <Image source={pic} style={styles.container}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3062c8'
    },

    text: {
        color: '#fff',
        fontSize: 18
    }

})

