import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { Avatar } from './Avatar'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <Avatar/>

        <View style={styles.textContainer}>
            <Text style={styles.greet}>Good morning</Text>
            <Text style={styles.name}>Wilfred Obruche</Text>
        </View>
        <FontAwesome name='bell-o' size={22} color="white" />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 10
    },

    textContainer: {
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    },

    greet: {
        color: '#ccc',
        fontSize: 16
    },

    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "500"
    }
})


export default HomeHeader
