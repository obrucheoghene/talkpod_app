import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import Home from './screens/home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#181a21' barStyle='light-content' />

      {/* <AuthOptions/> */}
      {/* <Signup /> */}
      {/* <Signin/> */}
      <Home />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
    paddingTop: 10
  },
});
