import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/ui/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/ui/LoginScreen';
import { LOGIN_SCREEN, MMT_App, MMT_LANG, MMT_Login } from './src/common/constants';
import MMTSplash from './src/ui/makemytrip/MMTSplash';
import MMTLogin from './src/ui/makemytrip/MMTLogin';
import MMTLang from './src/ui/makemytrip/MMTLang';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage}/>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name={MMT_App} component={MMTSplash} options={{headerShown:false}}/>
      <Stack.Screen name={MMT_Login} component={MMTLogin} options={{headerShown:false}}/>
      <Stack.Screen name={MMT_LANG} component={MMTLang} options={{headerShown:false}}/>
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
