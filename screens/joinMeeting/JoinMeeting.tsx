import AppText from "../../components/AppText"
import { ScreenParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import AppInput from "../../components/AppInput";
import ViewContainer from "../../components/ViewContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spacer from "../../components/Spacer";
import { AppFonts } from "../../types/interfaces";
import Divider from "../../components/Divider";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'JoinMeeting'>;

const JoinMeeting = ({ navigation }: ScreenProps) => {
  const {theme} = useContext(AppContext);

  return (
    <ScreenContainer style={{ rowGap: theme.sizes.b}}>
      <Spacer height={2}/>
      <AppText style={styles.label} font={AppFonts["Urbanist-Medium"]}>Meeting Id</AppText>
      <ViewContainer>
        <AppInput placeholder="Email" />
      </ViewContainer>

      <AppText style={styles.label} font={AppFonts["Urbanist-Medium"]}>Display Name</AppText>
      <ViewContainer>
        <AppInput placeholder="Email" />
      </ViewContainer>
      <Divider/>

      <AppText >Join Options</AppText>
    </ScreenContainer>

  

  ) 
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '600'
  }
})

export default JoinMeeting
