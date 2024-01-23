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

type ScreenProps = NativeStackScreenProps<ScreenParams, 'ScheduleMeeting'>;

const ScheduleMeeting = ({ navigation }: ScreenProps) => {
  const { theme } = useContext(AppContext);

  return (
    <ScreenContainer  >
      <Spacer height={2} />
      <View style={{ rowGap: theme.sizes.b, flex: 1 }}>
        <AppText style={styles.label} font={AppFonts["Urbanist-Medium"]}>Meeting Id</AppText>
        <ViewContainer>
          <AppInput placeholder="Email" />
        </ViewContainer>

        <AppText style={styles.label} font={AppFonts["Urbanist-Medium"]}>Display Name</AppText>
        <ViewContainer>
          <AppInput placeholder="Email" />
        </ViewContainer>
        <Divider />

        <AppText font={AppFonts['Urbanist-Medium']} >Join Options</AppText>

        <View style={styles.option}>
          <AppText font={AppFonts['Urbanist-Medium']} >Turn OFF my video </AppText>
          <Switch />
        </View>
        <View style={styles.option}>
          <AppText font={AppFonts['Urbanist-Medium']} >Turn OFF my audio </AppText>
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
    alignItems: 'center'
  }
})

export default ScheduleMeeting
