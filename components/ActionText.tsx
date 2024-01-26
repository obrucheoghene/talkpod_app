import { StyleSheet, Text, View, Pressable } from "react-native"
import AppText from "./AppText"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

interface ActionTextProps {
    question: string,
    actionText: string,
    onPress: () => void
}
const ActionText: React.FC<ActionTextProps> = ({ question, actionText, onPress }) => {
    const {theme} = useContext(AppContext);
    return (
        <View style={styles.container}>
            <AppText >{question}</AppText>

            <Pressable onPress={onPress}><AppText style={{
                color: theme.colors.primary
            }}>{actionText}</AppText></Pressable>
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
