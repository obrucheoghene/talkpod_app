import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { useContext } from "react"
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet"

import MeetingItem from "./MeetingItem"
import { meetings } from "../utils/data"
import AppText from "./AppText"
import { AppContext } from "../context/AppContext"


interface HomeMeetingHistoryProps {
  openMeetingHistory: () => void
}
const HomeMeetingHistory:React.FC<HomeMeetingHistoryProps> = ({openMeetingHistory}) => {
  const {theme} = useContext(AppContext);


  return (
    <View style={styles.container}>
      <View style={{
        ...styles.header,
        borderColor: theme.colors.dark3
        }}>
        <AppText style={{
          fontSize: 20,
          fontWeight: '600'
        }}>Meeting History</AppText>
       <TouchableOpacity onPress={openMeetingHistory }>
       <AppText style={{
          color: theme.colors.primary
        }}>Sell all</AppText>
       </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {meetings.map(meeting => <MeetingItem key={meeting.id} {...meeting}/>)}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    borderTopWidth: 1,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  scrollView: {

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})



export default HomeMeetingHistory
