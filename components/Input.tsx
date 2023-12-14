import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

interface InputProps {
    icon: string,
    placeholder: string,
}
const Input:React.FC<InputProps> = ({icon}) => {
  return (
    <View style={styles.container}>
        <FontAwesome name='user' size={24} color="white" />
        <TextInput placeholder='Enter fullname' style={styles.input}
        placeholderTextColor={'#ccc'}/>
    </View>
  )
}
 const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#1f222a',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1f222a',
        columnGap: 10,
        paddingHorizontal: 20
    },

    input: {
        color: '#fff',
        flex: 1,
        fontSize: 16
    }

})

export default Input
