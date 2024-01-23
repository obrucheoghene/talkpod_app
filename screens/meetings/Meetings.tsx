import React, { useContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import ScreenContainer from '../../components/ScreenContainer'
import AppText from '../../components/AppText'
import { meetings } from '../../utils/data'
import MeetingItem from '../../components/MeetingItem'
import { AppFonts } from '../../types/interfaces'
import { AppContext } from '../../context/AppContext'
import Divider from '../../components/Divider'
import Spacer from '../../components/Spacer'

const Meetings = () => {
    const { theme } = useContext(AppContext);

    return (
        <ScreenContainer>
            <ScrollView >
                <AppText style={{ fontSize: theme.sizes.m }} font={AppFonts['Urbanist-Medium']}>Today</AppText>

                {meetings.slice(0, 3).map(meeting => <MeetingItem key={meeting.id} {...meeting} isDone={false} />)}

                <Divider />
                <Spacer height={16}/>
                <AppText style={{ fontSize: theme.sizes.m }} font={AppFonts['Urbanist-Medium']}>Tomorrow</AppText>

                {meetings.slice(3, 7).map(meeting => <MeetingItem key={meeting.id} {...meeting} isDone={false} />)}

                <Divider />
                <Spacer height={16}/>
                <AppText style={{ fontSize: theme.sizes.m }} font={AppFonts['Urbanist-Medium']}>Jan 24, 2024</AppText>

                {meetings.slice(7, 9).map(meeting => <MeetingItem key={meeting.id} {...meeting} isDone={false} />)}

            </ScrollView>

        </ScreenContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 10
    },


})
export default Meetings
