import { StyleSheet, StatusBar, } from 'react-native';
import AuthOptions from './screens/auth/AuthOptions';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import Home from './screens/home/Home';
import MeetingHistory from './screens/meetingHistory/MeetingHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './context/AppContext';
import SafeAreaInset from './components/SafeAreaInset';
import Onboard from './screens/onboard/Onboard';
import JoinMeeting from './screens/joinMeeting/JoinMeeting';
import { useFonts } from 'expo-font';




export type ScreenParams = {
  Home: undefined,
  Onboard: undefined,
  AuthOptions: undefined,
  Signup: undefined,
  Signin: undefined,
  MeetingHistory: undefined,
  JoinMeeting: undefined,
}
const Stack = createNativeStackNavigator<ScreenParams>();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-Light': require('./assets/fonts/Urbanist-Light.ttf'),
    'Urbanist-Mediumm': require('./assets/fonts/Urbanist-Mediumm.ttf'),
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-Semibold': require('./assets/fonts/Urbanist-Semibold.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaInset>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='JoinMeeting'
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
                }} />

              <Stack.Screen name='Signin' component={Signin}
                options={{
                  headerShown: false
                }} />
              <Stack.Screen name='MeetingHistory' options={{
                title: 'Meeting History',
              }} component={MeetingHistory} />

              <Stack.Screen name='JoinMeeting' options={{
                title: 'Join Meeting',
              }} component={JoinMeeting} />
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
