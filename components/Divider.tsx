import React, { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import AppText from "./AppText"
import { AppContext } from "../context/AppContext"

interface DividerProps {
    text?: string
}
const Divider: React.FC<DividerProps> = ({ text }) => {
    const { theme } = useContext(AppContext);
    if (text)
        return (
            <View style={styles.container}>
                <View style={{ ...styles.line, backgroundColor: theme.colors.dark3 }}></View>
                <View><AppText style={{ fontSize: theme.sizes.m }}>{text}</AppText></View>
                <View style={{ ...styles.line, backgroundColor: theme.colors.dark3 }}></View>
            </View>
        )

    return <View style={{ height: 1, backgroundColor: theme.colors.dark3 }}></View>

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    line: {
        height: 1,
        backgroundColor: '#333',
        flexGrow: 1
    }
})

export default Divider
