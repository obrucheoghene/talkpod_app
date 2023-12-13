import { StyleSheet, Text, View, Pressable } from "react-native"

interface ActionTextProps {
    question: string,
    actionText: string
}
const ActionText: React.FC<ActionTextProps> = ({ question, actionText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{question}</Text>

            <Pressable><Text style={styles.actionText}>{actionText}</Text></Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    actionText: {
        color: '#3062c8',
        fontSize: 18
    },
})
export default ActionText
