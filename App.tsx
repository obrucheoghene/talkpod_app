import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthOptions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
  },
});
