import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppButton from './AppButton'

import Google from "../assets/svg/google.svg"
import Apple from "../assets/svg/apple.svg"
import Kingschat from "../assets/svg/kingschat.svg"

const AuthIcons = () => {
    return (
        <View style={styles.container}>
            <AppButton style={styles.iconButton}>
                <Kingschat width={24} height={24} />

            </AppButton>
            <AppButton style={styles.iconButton}>
                <Google width={24} height={24} />

            </AppButton>
            <AppButton style={styles.iconButton}>
                <Apple width={24} height={24} />
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
