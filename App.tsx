import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#181a21' barStyle='light-content'/>
      {/* <AuthOptions/> */}
      {/* <Signup/> */}
      <Signin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
  },
});
