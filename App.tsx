import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#181a21' barStyle='light-content'/>
      {/* <AuthOptions/> */}
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
  },
});
