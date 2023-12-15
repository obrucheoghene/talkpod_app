import { StyleSheet, Text, View } from "react-native"
import MeetingItem from "./MeetingItem"

const HomeMeetingHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meeting History</Text>
        <Text style={styles.seeAll}>Sell all</Text>
      </View>

      <MeetingItem/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 18
  },

  seeAll: {
    color: '#2d71fe',
    fontSize: 16

  }
})



export default HomeMeetingHistory