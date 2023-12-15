import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import { buttonStyles, inputStyles } from "../../styles/styles";
import Divider from "../../components/Divider";
import AuthIcons from "../../components/AuthIcons";
import ActionText from "./ActionText";

const Signin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to Your Account</Text>



            <View style={inputStyles.container}>
                <FontAwesome name='envelope' size={18} color="#ccc" />
                <TextInput placeholder='Email' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </View>

            <View style={inputStyles.container}>
                <FontAwesome name='lock' size={22} color="#ccc" />

                <TextInput placeholder='Password' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
                <FontAwesome name='eye' size={22} color="#ccc" />
            </View>

            <Pressable style={buttonStyles.blueContainer}>
                <Text style={styles.text}>Sign in</Text>
            </Pressable>

            <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>

            <Divider text="or continue with" />

            <AuthIcons/>

            <ActionText question="Already have an account?" actionText="Sign in"/>
        </View>
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
