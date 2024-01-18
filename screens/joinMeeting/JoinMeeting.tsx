import { ScreenContainer } from "react-native-screens"
import AppText from "../../components/AppText"
import { ScreenParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ScreenProps = NativeStackScreenProps<ScreenParams, 'JoinMeeting'>;

const JoinMeeting = ({navigation}: ScreenProps) => {
  return (
    <ScreenContainer>
        <AppText>
        JoinMeeting
        </AppText>
    </ScreenContainer>

  )
}

export default JoinMeeting
