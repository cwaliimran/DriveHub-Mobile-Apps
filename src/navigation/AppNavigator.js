import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import LanguageSelectionScreen from '../screens/Auth/LanguageSelection';
import typography from '../theme/typography';
import OnboardingScreen from '../screens/Auth/Onboarding';
import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';
import VerifyOTPScreen from '../screens/Auth/VerifyOTP';
import ForgotVerifyOTPScreen from '../screens/Auth/ForgotVerifyOTP';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';

import PlatformSelectionScreen from '../screens/Auth/PlatformSelection';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';

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
<Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
<Stack.Screen name="PlatformSelection" component={PlatformSelectionScreen} />
<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
<Stack.Screen name="ForgotVerifyOTP" component={ForgotVerifyOTPScreen} />
<Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />

  </Stack.Navigator>
);

export default AppNavigator;
