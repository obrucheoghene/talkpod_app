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


type ScreenProps = NativeStackScreenProps<ScreenParams, 'Signup'>;

const Signup = ({ navigation }: ScreenProps) => {
    const { theme } = useContext(AppContext)

    return (
        <ScreenContainer style={{
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: theme.spacing.b,
        }}>

            <Text style={styles.title}>Create New Account</Text>

            <ViewContainer>
                <GrayMessage height={20} width={20} />
                <TextInput placeholder='Fullname' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </ViewContainer>

            <ViewContainer>
                <GrayMessage height={20} width={20} />
                <TextInput placeholder='Email' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </ViewContainer>

            <ViewContainer>
                <GrayLock height={20} width={20} />
                <TextInput placeholder='Password' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
                <GrayEyeSlash height={20} width={20} />
            </ViewContainer>

            <Pressable style={buttonStyles.blueContainer}>
                <Text style={styles.text}>Sign in</Text>
            </Pressable>


            <Divider text="or continue with" />

            <AuthIcons />

            <ActionText question="Already have an account?"
                actionText="Sign in"
                onPress={() => navigation.navigate('Signin')} />
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


export default Signup
