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
import LinkUberScreen from '../screens/Auth/LinkUberScreen';
import VerifyUberOTPScreen from '../screens/Uber/VerifyUberOTP';
import LinkUberPasswordScreen from '../screens/Uber/Auth/LinkUberPasswordScreen';
import SetupAccessibilityScreen from '../screens/Auth/Common/SetupAccessibilityScreen';
import LinkLyftScreen from '../screens/LinkLyft/Auth';
import VerifyLyftOTPScreen from '../screens/LinkLyft/VerifyOTP';
import LinkLyftLicenseScreen from '../screens/LinkLyft/License';
import DoorDashAuthScreen from '../screens/DoorDash/Auth';
import VerifyDoorDashOTPScreen from '../screens/DoorDash/VerifyOTP';
import BottomTabNavigator from './BottomTabNavigator';
import MoreScreen from '../screens/More';
import FAQScreen from '../screens/More/Options/FAQ';
import AnnouncementScreen from '../screens/More/Options/Announcement';
import ReportIssueScreen from '../screens/More/Options/ReportIssue';
import ContactSupportScreen from '../screens/More/Options/Support';
import AboutScreen from '../screens/More/Options/About';
import PrivacyScreen from '../screens/More/Options/Privacy';
import TermsScreen from '../screens/More/Options/Terms';
import LanguageMoreScreen from '../screens/More/Options/Language';
import ThemeMoreScreen from '../screens/More/Options/Theme';
import CardsScreen from '../screens/More/Options/Cards';
 import AddCardScreen from '../screens/More/Options/AddCard';
import EditCardScreen from '../screens/More/Options/EditCard';
import ProfileScreen from '../screens/More/Options/Profile';
import EditProfileScreen from '../screens/More/Options/Profile/EditProfile';
import ResetPasswordScreenMore from '../screens/More/Options/Profile/ResetPasswordScreen';
import PlansScreen from '../screens/More/Options/Plans';
import NotificationsScreen from '../screens/notification';

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
    <Stack.Screen name="LinkUber" component={LinkUberScreen} />
    <Stack.Screen name="VerifyUberOTP" component={VerifyUberOTPScreen} />
    <Stack.Screen name="LinkLyft" component={LinkLyftScreen} />
    <Stack.Screen name="VerifyLyftOTP" component={VerifyLyftOTPScreen} />
    <Stack.Screen name="LinkLyftLicense" component={LinkLyftLicenseScreen} />


    <Stack.Screen
      name="LinkUberPassword"
      component={LinkUberPasswordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SetupAccessibility"
      component={SetupAccessibilityScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DoorDashAuth"
      component={DoorDashAuthScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerifyDoorDashOTP"
      component={VerifyDoorDashOTPScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
  name="Notifications"
  component={NotificationsScreen}
  options={{ headerShown: false }}
/>
    <Stack.Screen name="More" component={MoreScreen} />
    <Stack.Screen name="Announcements" component={AnnouncementScreen} />
<Stack.Screen name="ReportIssue" component={ReportIssueScreen} />
<Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
<Stack.Screen name="FAQ" component={FAQScreen} />
<Stack.Screen name="About" component={AboutScreen} />
<Stack.Screen name="Privacy" component={PrivacyScreen} />
<Stack.Screen name="Terms" component={TermsScreen} />
<Stack.Screen name="LanguageMore" component={LanguageMoreScreen} />
<Stack.Screen name="Theme" component={ThemeMoreScreen} />
<Stack.Screen name="Cards" component={CardsScreen} />
<Stack.Screen
  name="AddCard"
  component={AddCardScreen}
  // options={{ headerShown: false }}
/>
<Stack.Screen name="EditCard" component={EditCardScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
<Stack.Screen
  name="EditProfile"
  component={EditProfileScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="ResetPasswordMore"
  component={ResetPasswordScreenMore}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Plans"
  component={PlansScreen}
  options={{ headerShown: false }}
/>
  </Stack.Navigator>
);

export default AppNavigator;
