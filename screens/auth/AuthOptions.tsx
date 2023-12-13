import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"

// import secureLogin from '../../assets/talkpod-logo.png'
import kingschat from '../../assets/kingschat-logo.png'
import apple from '../../assets/apple-logo.png'
import google from '../../assets/google-logo.png'

const AuthOptions = () => {
  return (
    <View style={styles.container}>
        {/* <Image source={secureLogin} style={styles.image} /> */}
        <Text style={styles.title}>Get started</Text>
        <Pressable style={styles.button}>
          <Image  source={kingschat} style={styles.icon}/><Text style={styles.text}>Continue with Kingschat </Text>
        </Pressable>
        <Pressable style={styles.button}>
        <Image  source={google} style={styles.icon}/> <Text style={styles.text}>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.button}>
        <Image  source={apple} style={styles.icon}/> <Text style={styles.text}>Continue with Apple</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        padding: 20
    },
    image: {
      width: 100,
      height: 100
    },
    title: {
      color: '#fff',
      fontSize: 40
    },
    button: {
      backgroundColor: '#1f222a',
      color: '#fff',
      flexDirection: 'row',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: 20,
      columnGap: 10
      
    },
    text: {
      color: '#fff',
      fontSize: 18
    },
    icon: {
      width: 30,
      height: 30
    }
})

export default AuthOptions
