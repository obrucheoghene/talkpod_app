import { StyleSheet, Text, View } from 'react-native'

import WhiteBell from '../assets/svg/white-bell.svg'

import { Avatar } from './Avatar'
import AppText from './AppText'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const HomeHeader = () => {
    const {theme} = useContext(AppContext)

  return (
    <View style={styles.container}>
        <Avatar/>

        <View style={styles.textContainer}>
            <AppText style={{
                color: theme.colors.grey300
            }}>Good morning 👋</AppText>
            <AppText style={{
                fontWeight: '600',
                fontSize: 20,
                
            }}>Wilfred Obruche</AppText>
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

})


export default HomeHeader
