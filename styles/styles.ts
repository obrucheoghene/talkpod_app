import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({

})

export const buttonStyles = StyleSheet.create({
    
    darkContainer: {
        backgroundColor: '#1f222a',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#333',
        columnGap: 10,
    },

    blueContainer: {
        backgroundColor: '#3062c8',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#3062c8',
        columnGap: 10,
    }
})


export const inputStyles = StyleSheet.create({
    
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
