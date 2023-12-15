import { StyleSheet, Text, View } from "react-native"
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const HomeOptions = () => {
  return (
    <View style={styles.container}>
        <View style={styles.option}>
        <View style={[styles.cirle, styles.new]}>
        <FontAwesome name='video-camera' size={30} color="#fff" />

        </View>
        <Text style={styles.text}>New</Text>
        </View>
        <View style={styles.option}>
        <View style={[styles.cirle, styles.join]}>
        <FontAwesome name='plus-square' size={30} color="#fff" />

        </View>
        <Text style={styles.text}>Join</Text>
        </View>
        <View style={styles.option}>
        <View style={[styles.cirle, styles.shedule]}>
        <FontAwesome5 name='calendar-alt' size={30} color="#fff" />

        </View>
        <Text style={styles.text}>Schedule</Text>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    option: {
        rowGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cirle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    new: {
        backgroundColor: '#2d71fe'
    },
    join: {
        backgroundColor: '#fc9809'
    },
    shedule: {
        backgroundColor: '#ff5c74'
    },

    text: {
        color: '#fff',
        fontSize: 18
    }

})

export default HomeOptions
