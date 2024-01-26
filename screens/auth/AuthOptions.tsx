import { StyleSheet, View } from "react-native"
import { useContext } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import Divider from "../../components/Divider"
import ActionText from "../../components/ActionText"
import ScreenContainer from "../../components/ScreenContainer"
import { AppContext } from "../../context/AppContext"
import AppText from "../../components/AppText"
import AppButton from "../../components/AppButton"
import { ScreenParams } from "../../App"

import DarkCloud from '../../assets/svg/dark-cloud.svg'
import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"
import Kingschat from "../../assets/svg/kingschat.svg"

type AuthOptionsProps = NativeStackScreenProps<ScreenParams, 'AuthOptions'>;

const AuthOptions = ({navigation}: AuthOptionsProps) => {
  const {theme} = useContext(AppContext)

  return (
    <ScreenContainer style={{
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: theme.spacing.b,
    }}>
      <DarkCloud height={178} width={260}  />
      <AppText style={{fontSize: theme.sizes.xl}}>Get started</AppText>
      
      <AppButton>
        <Kingschat width={24} height={24}/>
        <View><AppText  >Continue with Kingschat </AppText></View>
      </AppButton>

      <AppButton>
      <Google width={24} height={24}/>

        <View><AppText >Continue with Google</AppText></View>
      </AppButton>
      <AppButton>
      <Apple width={24} height={24}/>
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
