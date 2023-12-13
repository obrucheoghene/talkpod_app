import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface DividerProps {
    text: string
}
const Divider: React.FC<DividerProps> = ({text}) => {
  return (
    <View style={styles.container}>
        <View style={styles.line}></View>
        <View><Text style={styles.text}>{text}</Text></View>
        <View style={styles.line}></View>
    </View>
  )
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
