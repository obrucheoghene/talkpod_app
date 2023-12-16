import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Meeting } from '../types/interfaces'


const MeetingItem:React.FC<Meeting> = ({id, title, status, date, time}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>{time}</Text>
        <View style={styles.body}>
            <Text style={styles.subtitle}>{date}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Meeting ID: {id}</Text>
        </View>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
                {status}
            </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        flexDirection: 'row',
        columnGap: 30,
        alignItems: 'center',
        paddingVertical: 12
    },
    body: {
        flexGrow: 1,
        rowGap: 5
    },
    title: {
        color: '#fff',
        fontSize: 18
    },
    subtitle: {
        color: '#ccc',
        fontSize: 12
    },
    button: {
        borderColor: '#2d71fe',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8
    },
    buttonText: {
        color: '#2d71fe',
        fontSize: 12
    }

})
export default MeetingItem
