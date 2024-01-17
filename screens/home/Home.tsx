import { StyleSheet } from "react-native"
import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import HomeHeader from "../../components/HomeHeader"
import HomeOptions from "../../components/HomeOptions";
import HomeMeetingHistory from "../../components/HomeMeetingHistory";
import ScreenContainer from "../../components/ScreenContainer";
import ViewContainer from "../../components/ViewContainer";

import GraySearch from "../../assets/svg/gray-search.svg"
import AppInput from "../../components/AppInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParams } from "../../App";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'Home'>;


const Home = ({ navigation }: ScreenProps) => {
    
    const {theme} = useContext(AppContext)

    const openMeetingHistory = () => {
        navigation.push('MeetingHistory')
    }
    return (
        <ScreenContainer style={{
            rowGap: theme.spacing.b,
          }}> 

            <HomeHeader />

            <ViewContainer>
                <GraySearch height={20} width={20} />
                <AppInput placeholder="Search" />
            </ViewContainer>

            <HomeOptions/>

            <HomeMeetingHistory openMeetingHistory={openMeetingHistory}/>
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
