import AppText from "../../components/AppText"
import { ScreenParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import AppInput from "../../components/AppInput";
import ViewContainer from "../../components/ViewContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'JoinMeeting'>;

const JoinMeeting = ({ navigation }: ScreenProps) => {
  const {theme} = useContext(AppContext);

  return (
    <ScreenContainer style={{ rowGap: theme.sizes.b}}>

      <AppText style={styles.label}>Meeting Id</AppText>
      <ViewContainer>
        <AppInput placeholder="Email" />
      </ViewContainer>

      <AppText style={styles.label}>Display Name</AppText>
      <ViewContainer>
        <AppInput placeholder="Email" />
      </ViewContainer>
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
