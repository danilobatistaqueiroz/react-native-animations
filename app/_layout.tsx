import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
//import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import SplashScreen from './telas/SplashScreen';
import Onboarding from './telas/Onboarding';
import Principal from './telas/Principal';
import Detalhes from './telas/Detalhes';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
      <Tab.Navigator>
        <Tab.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Detalhes" component={Detalhes}/>
      </Tab.Navigator>
  );
}
