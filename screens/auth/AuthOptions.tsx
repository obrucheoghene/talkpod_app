import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"

// import secureLogin from '../../assets/talkpod-logo.png'
import kingschat from '../../assets/kingschat-logo.png'
import apple from '../../assets/apple-logo.png'
import google from '../../assets/google-logo.png'
import DarkCloud from '../../assets/svg/dark-cloud.svg'
import Divider from "../../components/Divider"
import ActionText from "./ActionText"
import ScreenContainer from "../../components/ScreenContainer"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import AppText from "../../components/AppText"
import AppButton from "../../components/AppButton"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ScreenParams } from "../../App"


type AuthOptionsProps = NativeStackScreenProps<ScreenParams, 'AuthOptions'>;

const AuthOptions = ({navigation}: AuthOptionsProps) => {
  const {theme} = useContext(AppContext)

  return (
    <ScreenContainer style={{
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: theme.spacing.b,
    }}>
      <Image source={DarkCloud} style={styles.image} />
      <AppText style={{fontSize: theme.sizes.xl}}>Get started</AppText>
      
      <AppButton>
        <Image source={kingschat} style={styles.icon} />
        <View><AppText  >Continue with Kingschat </AppText></View>
      </AppButton>

      <AppButton>
        <Image source={google} style={styles.icon} />
        <View><AppText >Continue with Google</AppText></View>
      </AppButton>
      <AppButton>
        <Image source={apple} style={styles.icon} />
        <View><AppText >Continue with Apple</AppText></View>
      </AppButton>

      <Divider text="or" />
      <AppButton style={{
        backgroundColor: theme.colors.primary,
        borderRadius: theme.sizes.s60
      }} onPress={() =>  navigation.navigate("Signin")}>
        <AppText >Sign in with password</AppText>
      </AppButton>

      <ActionText question="Don't have an account?" 
      actionText="Sign up"
      onPress={() => navigation.navigate('Signup')}/>
 
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({

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
