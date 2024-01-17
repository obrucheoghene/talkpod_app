import { StyleSheet, StatusBar, } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import Home from './screens/home/Home';
import MeetingHistory from './screens/MeetingHistory/MeetingHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './context/AppContext';
import SafeAreaInset from './components/SafeAreaInset';
import Onboard from './screens/onboard/Onboard';

export type  ScreenParams = {
  Home: undefined,
  Onboard: undefined,
  AuthOptions: undefined,
  Signup: undefined,
  Signin: undefined,
  MeetingHistory: undefined,
}
const Stack = createNativeStackNavigator<ScreenParams>();

export default function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaInset>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='AuthOptions'
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#181a21',
                },
                headerTintColor: '#fff'
              }}>
              <Stack.Screen name='Onboard' component={Onboard}
                options={{
                  headerShown: false
                }} />
              <Stack.Screen name='Home' component={Home}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen name='AuthOptions' component={AuthOptions}
                options={{
                  headerShown: false
                }} />

              <Stack.Screen name='Signup' component={Signup} 
              options={{
                headerShown: false
              }}/>

              <Stack.Screen name='Signin' component={Signin} 
              options={{
                headerShown: false
              }}/>
              <Stack.Screen name='MeetingHistory' options={{
                title: 'Meeting History'
              }} component={MeetingHistory} />
            </Stack.Navigator>

          </NavigationContainer>
        </SafeAreaInset>
      </SafeAreaProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a21',
    paddingTop: StatusBar.currentHeight
  },
});
