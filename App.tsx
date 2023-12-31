import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import Home from './screens/home/Home';
import MeetingHistory from './screens/MeetingHistory/MeetingHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#181a21',
            },
            headerTintColor: '#fff'
          }}>
          <Stack.Screen name='Home' component={Home}
            options={{
              headerShown: false
            }} />

          <Stack.Screen name='AuthOptions' component={AuthOptions} />

          <Stack.Screen name='Signup' component={Signup} />

          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='MeetingHistory' component={MeetingHistory} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
    paddingTop: StatusBar.currentHeight
  },
});
