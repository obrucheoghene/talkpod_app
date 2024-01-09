import { StyleSheet, Text, View } from 'react-native'

import WhiteBell from '../assets/svg/white-bell.svg'

import { Avatar } from './Avatar'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <Avatar/>

        <View style={styles.textContainer}>
            <Text style={styles.greet}>Good morning</Text>
            <Text style={styles.name}>Wilfred Obruche</Text>
        </View>
    <WhiteBell width={24} height={24} />
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
