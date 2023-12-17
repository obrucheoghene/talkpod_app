import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MeetingItem from '../../components/MeetingItem'
import { meetings } from '../../utils/data'

const MeetingHistory = () => {
  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.title}>Meeting History</Text> 
        </View>
              <ScrollView style={styles.scrollView}>
        {meetings.map(meeting => <MeetingItem key={meeting.id} {...meeting}/>)}
      </ScrollView>
    </View>
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
