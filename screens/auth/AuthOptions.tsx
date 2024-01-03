import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"

// import secureLogin from '../../assets/talkpod-logo.png'
import kingschat from '../../assets/kingschat-logo.png'
import apple from '../../assets/apple-logo.png'
import google from '../../assets/google-logo.png'
import { buttonStyles, generalStyles } from "../../styles/styles"
import Divider from "../../components/Divider"
import ActionText from "./ActionText"
import ScreenContainer from "../../components/containers/ScreenContainer"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const AuthOptions = () => {
  const {theme} = useContext(AppContext)

  return (
    <ScreenContainer styles={{
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: theme.spacing.b,
    }}>
      {/* <Image source={secureLogin} style={styles.image} /> */}
      <Text style={styles.title}>Get started</Text>
      <Pressable style={buttonStyles.darkContainer}>
        <Image source={kingschat} style={styles.icon} />
        <View><Text style={styles.text}>Continue with Kingschat </Text></View>
      </Pressable>

      <Pressable style={buttonStyles.darkContainer}>
        <Image source={google} style={styles.icon} />
        <View><Text style={styles.text}>Continue with Google</Text></View>
      </Pressable>
      <Pressable style={buttonStyles.darkContainer}>
        <Image source={apple} style={styles.icon} />
        <View><Text style={styles.text}>Continue with Apple</Text></View>
      </Pressable>

      <Divider text="or" />
      <Pressable style={buttonStyles.blueContainer}>
        <Text style={styles.text}>Sign in with password</Text>
      </Pressable>

      <ActionText question="Don't have an account?" actionText="Sign up"/>
 
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
    padding: 20,
    
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 40,
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
