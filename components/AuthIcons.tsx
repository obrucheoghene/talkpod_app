import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import kingschat from '../assets/kingschat-logo.png'
import apple from '../assets/apple-logo.png'
import google from '../assets/google-logo.png'
import AppButton from './AppButton'

const AuthIcons = () => {
  return (
    <View style={styles.container}>
    <AppButton style={ styles.iconButton}>
        <Image source={kingschat} style={styles.icon} />
    </AppButton>
    <AppButton style={ styles.iconButton}>
        <Image source={google} style={styles.icon} />
    </AppButton>
    <AppButton style={styles.iconButton}>
        <Image source={apple} style={styles.icon} />
    </AppButton>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 20,
    },

    icon: {
        width: 30,
        height: 30
     },
     iconButton: {
        flexBasis: 80
     }
})
export default AuthIcons
