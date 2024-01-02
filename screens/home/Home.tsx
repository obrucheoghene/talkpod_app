import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import HomeHeader from "../../components/HomeHeader"
import { inputStyles } from "../../styles/styles"
import HomeOptions from "../../components/HomeOptions";
import HomeMeetingHistory from "../../components/HomeMeetingHistory";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeAreaInset from "../../components/SafeAreaInset";


const Home = () => {

    return (
        <SafeAreaInset>
        <View style={[styles.container] }>
            <StatusBar backgroundColor='#181a21' barStyle='light-content' />

            <HomeHeader />

            <View style={inputStyles.container}>
                <FontAwesome name='search' size={18} color="#ccc" />
                <TextInput placeholder='Search' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </View>
            <HomeOptions/>

            <HomeMeetingHistory/>
        </View>
        </SafeAreaInset>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181a21',
        paddingHorizontal: 20,
        flex: 1,
        rowGap: 15,    
    },

})

export default Home
