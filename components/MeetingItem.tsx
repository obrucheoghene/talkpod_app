import { StyleSheet, View, Text, Pressable } from 'react-native'

const MeetingItem = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>14:02</Text>
        <View style={styles.body}>
            <Text style={styles.subtitle}>Date</Text>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.subtitle}>Meeting Id</Text>
        </View>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
                Completed
            </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        borderColor: '#ccc',
        height: 80,
        flexDirection: 'row',
        columnGap: 30,
        alignItems: 'center'
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
        color: '#ccc'
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
    }

})
export default MeetingItem
