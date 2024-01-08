import { StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

import HomeHeader from "../../components/HomeHeader"
import { inputStyles } from "../../styles/styles"
import HomeOptions from "../../components/HomeOptions";
import HomeMeetingHistory from "../../components/HomeMeetingHistory";

import ScreenContainer from "../../components/ScreenContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ViewContainer from "../../components/ViewContainer";

import GraySearch from "../../assets/svg/gray-search.svg"


const Home = () => {
    const {theme} = useContext(AppContext)

    return (
        <ScreenContainer style={{
            rowGap: theme.spacing.b,
          }}> 

            <HomeHeader />

            <ViewContainer>
                <GraySearch height={20} width={20} />
                <TextInput placeholder='Email' style={inputStyles.input}
                    placeholderTextColor={'#ccc'} />
            </ViewContainer>

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
