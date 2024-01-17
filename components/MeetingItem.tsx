import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Meeting } from '../types/interfaces'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AppText from './AppText';


const MeetingItem:React.FC<Meeting> = ({id, title, status, date, time}) => {
    const {theme} = useContext(AppContext);

  return (
    <View style={{
        ...styles.container,
        borderColor: theme.colors.dark3}}>
        <AppText style={{
            color: theme.colors.grey300,
            fontSize: 14
            
        }}>{time}</AppText>
        <View style={styles.body}>
            <AppText style={{
                 color: theme.colors.grey300,
                 fontSize: 14
            }}>{date}</AppText>
            <AppText style={{
                fontSize: theme.sizes.m,
                fontWeight: '600'
            }}>{title}</AppText>
            <AppText style={{
                 color: theme.colors.grey300,
                 fontSize: 14
            }}>Meeting ID: {id}</AppText>
        </View>
        <TouchableOpacity style={{
            ...styles.button,
            borderColor: theme.colors.primary}}>
            <AppText style={{
                fontSize: 12,
                color: theme.colors.primary
            }}>
                {status}
            </AppText>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        flexDirection: 'row',
        columnGap: 30,
        alignItems: 'center',
        paddingVertical: 12
    },
    body: {
        flexGrow: 1,
        rowGap: 8
    },

    button: {
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
