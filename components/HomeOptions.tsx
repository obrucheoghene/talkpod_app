import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import WhiteCamera from '../assets/svg/white-camera.svg'
import WhiteJoin from '../assets/svg/white-join.svg'
import WhiteCalendar from '../assets/svg/white-calendar.svg'
import { useNavigation } from "@react-navigation/native"
import { ScreenParams } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type ScreenProps = NativeStackScreenProps<ScreenParams, 'Home'>;

interface HomeOptionProps {
    openNewMeetingSheet: () => void
    openJoinMeeting: () => void
    openScheduleMeeting: () => void
}

const HomeOptions: React.FC<HomeOptionProps> = ({openNewMeetingSheet, openJoinMeeting, openScheduleMeeting}) => {
    const {navigation} = useNavigation<ScreenProps>()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={openNewMeetingSheet}>
                <View style={[styles.cirle, styles.new]}>
                    <WhiteCamera width={30} height={30} />

                </View>
                <Text style={styles.text}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={openJoinMeeting}>
                <View style={[styles.cirle, styles.join]}>
                    <WhiteJoin width={30} height={30} />
                </View>
                <Text style={styles.text}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={openScheduleMeeting}>
                <View style={[styles.cirle, styles.shedule]}>
                    <WhiteCalendar width={30} height={30} />

                </View>
                <Text style={styles.text}>Schedule</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    option: {
        rowGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cirle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    new: {
        backgroundColor: '#2d71fe'
    },
    join: {
        backgroundColor: '#fc9809'
    },
    shedule: {
        backgroundColor: '#ff5c74'
    },

    text: {
        color: '#fff',
        fontSize: 18
    }

})

export default HomeOptions
