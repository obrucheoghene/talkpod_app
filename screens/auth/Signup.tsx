import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


import { buttonStyles, inputStyles } from "../../styles/styles";
import Divider from "../../components/Divider";
import AuthIcons from "../../components/AuthIcons";
import ActionText from "./ActionText";

const Signup = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Account</Text>

            <View style={inputStyles.container}>
                <FontAwesome name='user' size={22} color="white" />
                <TextInput placeholder='Fullname' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </View>

            <View style={inputStyles.container}>
                <FontAwesome name='envelope' size={18} color="white" />
                <TextInput placeholder='Email' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </View>

            <View style={inputStyles.container}>
                <FontAwesome name='lock' size={22} color="white" />

                <TextInput placeholder='Password' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
                <FontAwesome name='eye' size={22} color="white" />
            </View>

            <Pressable style={buttonStyles.blueContainer}>
                <Text style={styles.text}>Sign up</Text>
            </Pressable>

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
    }
})


export default Signup
