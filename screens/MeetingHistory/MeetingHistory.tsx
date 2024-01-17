import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MeetingItem from '../../components/MeetingItem'
import { meetings } from '../../utils/data'
import ScreenContainer from '../../components/ScreenContainer'

const MeetingHistory = () => {
  return (
    <ScreenContainer>

              <ScrollView style={styles.scrollView}>
        {meetings.map(meeting => <MeetingItem key={meeting.id} {...meeting}/>)}
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
    scrollView: {
    }

})

export default MeetingHistory
