import { StyleSheet } from "react-native"
import { useCallback, useContext, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet"

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
import AppText from "../../components/AppText";
import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'Home'>;


const Home = ({ navigation }: ScreenProps) => {
    
    const {theme} = useContext(AppContext)
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(() => ['25%', '50%'], [])

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
    
    const handleOpenNewMeetingSheet = () => bottomSheetRef.current?.expand()

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

            <HomeOptions handleOpenNewMeetingSheet={handleOpenNewMeetingSheet}/>

            <HomeMeetingHistory openMeetingHistory={openMeetingHistory}/>

            <BottomSheet 
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}>
                <AppText>This is Awesome 🎉</AppText>
            </BottomSheet>
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
