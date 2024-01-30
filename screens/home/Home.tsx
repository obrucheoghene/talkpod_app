import { StyleSheet, View } from "react-native"
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
import { AppFonts } from "../../types/interfaces";
import Spacer from "../../components/Spacer";
import { Switch } from "react-native-gesture-handler";
import Divider from "../../components/Divider";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'Home'>;


const Home = ({ navigation }: ScreenProps) => {

    const { theme } = useContext(AppContext)
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(() => ['35%'], [])

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

            <HomeOptions handleOpenNewMeetingSheet={handleOpenNewMeetingSheet} />

            <HomeMeetingHistory openMeetingHistory={openMeetingHistory} />

            <BottomSheet
                
                ref={bottomSheetRef}
                index={0}
                handleIndicatorStyle={{ backgroundColor: theme.colors.dark3 }}
                backgroundStyle={{
                    backgroundColor: theme.colors.dark2,
                    borderRadius: 48,
                    borderColor: theme.colors.dark3,
                    borderTopWidth: 2,
                }}

                snapPoints={snapPoints}
                enablePanDownToClose={true}>
                <Spacer height={5} />
                <AppText style={{ textAlign: 'center', fontSize: 24 }} font={AppFonts['Urbanist-Bold']}>Start New Meeting</AppText>
                
                <AppText  font={AppFonts["Urbanist-Medium"]}>Display Name</AppText>
        <ViewContainer>
          <AppInput placeholder="Display namme" />
        </ViewContainer>
        <Divider />


                <View style={styles.option}>
                    <AppText font={AppFonts['Urbanist-Medium']} >Turn ON my video </AppText>
                    <Switch />
                </View>
                <View style={styles.option}>
                    <AppText font={AppFonts['Urbanist-Medium']} >Turn ON my audio </AppText>
                    <Switch />
                </View>
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
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
})

export default Home
