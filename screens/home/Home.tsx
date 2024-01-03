import { StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import HomeHeader from "../../components/HomeHeader"
import { inputStyles } from "../../styles/styles"
import HomeOptions from "../../components/HomeOptions";
import HomeMeetingHistory from "../../components/HomeMeetingHistory";

import ScreenContainer from "../../components/ScreenContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const Home = () => {
    const {theme} = useContext(AppContext)

    return (
        <ScreenContainer styles={{
            rowGap: theme.spacing.b,
          }}> 

            <HomeHeader />

            <View style={inputStyles.container}>
                <FontAwesome name='search' size={18} color="#ccc" />
                <TextInput placeholder='Search' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </View>
            <HomeOptions/>

            <HomeMeetingHistory/>
        </ScreenContainer>
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
