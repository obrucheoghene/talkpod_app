import AppText from "../../components/AppText"
import { ScreenParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Switch, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import AppInput from "../../components/AppInput";
import ViewContainer from "../../components/ViewContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spacer from "../../components/Spacer";
import { AppFonts } from "../../types/interfaces";
import Divider from "../../components/Divider";
import AppButton from "../../components/AppButton";
import RightChevron from '../../assets/svg/white-right-chevron.svg'

type ScreenProps = NativeStackScreenProps<ScreenParams, 'ScheduleMeeting'>;

const ScheduleMeeting = ({ navigation }: ScreenProps) => {
  const { theme } = useContext(AppContext);

  return (
    <ScreenContainer  >
      <Spacer height={2} />
      <View style={{ rowGap: theme.sizes.b, flex: 1 }}>
        <AppText style={styles.label} font={AppFonts["Urbanist-Medium"]}>Meeting Title</AppText>
        <ViewContainer>
          <AppInput placeholder="Meeting title" />
        </ViewContainer>

        <Divider />
        {/* Date */}
        <View style={styles.option}>
          <AppText style={{ flex: 1 }} font={AppFonts['Urbanist-Medium']} >Date </AppText>
          <View style={styles.option}>
            <AppText font={AppFonts['Urbanist-Medium']} >12/24/2024 </AppText>
            <RightChevron width={15} height={15} />
          </View>
        </View>

        {/* From */}
        <View style={styles.option}>
          <AppText style={{ flex: 1 }} font={AppFonts['Urbanist-Medium']} >From </AppText>
          <View style={styles.option}>
            <AppText font={AppFonts['Urbanist-Medium']} >14:00 </AppText>
            <RightChevron width={15} height={15} />
          </View>
        </View>
        {/* To */}
        <View style={styles.option}>
          <AppText style={{ flex: 1 }} font={AppFonts['Urbanist-Medium']} >To </AppText>
          <View style={styles.option}>
            <AppText font={AppFonts['Urbanist-Medium']} >16:00 </AppText>
            <RightChevron width={15} height={15} />
          </View>
        </View>

        <View style={styles.option}>
          <AppText style={{ flex: 1 }} font={AppFonts['Urbanist-Medium']} >Time zone </AppText>
          <View style={styles.option}>
            <AppText font={AppFonts['Urbanist-Medium']} >Lagos/Africa </AppText>
            <RightChevron width={15} height={15} />
          </View>
        </View>

        <View style={styles.option}>
          <AppText style={{ flex: 1 }} font={AppFonts['Urbanist-Medium']} >Repeat </AppText>
          <View style={styles.option}>
            <AppText font={AppFonts['Urbanist-Medium']} >Never </AppText>
            <RightChevron width={15} height={15} />
          </View>
        </View>

        <Divider />

        <AppText font={AppFonts['Urbanist-Medium']} >Meeting Options</AppText>

        <View style={styles.option}>
          <AppText font={AppFonts['Urbanist-Medium']} >Enable waiting room </AppText>
          <Switch />
        </View>
        <View style={styles.option}>
          <AppText font={AppFonts['Urbanist-Medium']} >Add to calendar </AppText>
          <Switch />
        </View>
      </View>



      <AppButton style={{
        backgroundColor: theme.colors.primary,
        borderRadius: theme.sizes.s60
      }} >
        <AppText font={AppFonts['Urbanist-Bold']}>Join</AppText>
      </AppButton>
    </ScreenContainer>



  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '600'
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10
  }
})

export default ScheduleMeeting
