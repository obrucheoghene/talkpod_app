import { Pressable, StyleSheet, Text, TextInput } from "react-native"
import { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { buttonStyles, inputStyles } from "../../styles/styles";
import Divider from "../../components/Divider";
import AuthIcons from "../../components/AuthIcons";
import ActionText from "./ActionText";
import { ScreenParams } from "../../App";
import ScreenContainer from "../../components/ScreenContainer";
import { AppContext } from "../../context/AppContext";
import AppText from "../../components/AppText";
import ViewContainer from "../../components/ViewContainer";

import GrayMessage from '../../assets/svg/gray-message.svg'
import GrayLock from '../../assets/svg/gray-lock.svg'
import GrayEyeSlash from '../../assets/svg/gray-eye-slash.svg'
import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";


type ScreenProps = NativeStackScreenProps<ScreenParams, 'Signin'>;

const Signin = ({ navigation }: ScreenProps) => {
    const { theme } = useContext(AppContext)

    return (
        <ScreenContainer style={{
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: theme.spacing.b,
        }}>

            <Text style={styles.title}>Login to Your Account</Text>
            <ViewContainer>
                <GrayMessage height={20} width={20} />
                <AppInput placeholder="Email" />
            </ViewContainer>

            <ViewContainer>
                <GrayLock height={20} width={20} />
                <AppInput placeholder="Password" isSecret />
                <GrayEyeSlash height={20} width={20} />
            </ViewContainer>

            <AppButton style={{
                backgroundColor: theme.colors.primary,
                borderRadius: theme.sizes.s60
            }} onPress={() => navigation.navigate("Home")}>
                <AppText >Sign in</AppText>
            </AppButton>

            <AppText style={{ color: theme.colors.primary }}>Forgot your Password?</AppText>

            <Divider text="or continue with" />

            <AuthIcons />

            <ActionText question="Don't have an account?"
                actionText="Sign up"
                onPress={() => navigation.navigate('Signup')} />
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
        fontSize: 30,
    },
    text: {
        color: '#fff',
        fontSize: 18
    },

    icon: {
        width: 30,
        height: 30
    },
    forgotPasswordText: {
        color: '#3062c8',
        fontSize: 18
    }
})


export default Signin
