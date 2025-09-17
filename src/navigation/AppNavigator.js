import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import LanguageSelectionScreen from '../screens/Auth/LanguageSelection';
import typography from '../theme/typography';
import OnboardingScreen from '../screens/Auth/Onboarding';
import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false, 
    }}
  >
    <Stack.Screen name="Splash" component={SplashScreen} />
  <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

  </Stack.Navigator>
);

export default AppNavigator;
