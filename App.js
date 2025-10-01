import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, Platform } from 'react-native';
import { StatusBar } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import lightTheme from './src/theme/light';
import darkTheme from './src/theme/dark';
import useTheme from './src/hooks/useTheme';

import './src/localization/i18n';   // ✅ ensures i18n is initialized
import { LogBox } from 'react-native';

// ✅ Ignore ALL warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const theme = useTheme();
  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaProvider>
      <Suspense fallback={null}>
        <StatusBar
          translucent={Platform.OS === 'android'}                // ← only Android
          backgroundColor={theme.background}
          barStyle={theme.background === '#020202' ? 'light-content' : 'dark-content'}
        />

        {/* Protect the top safe area globally */}
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }} edges={['top']}>
          <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </Suspense>
    </SafeAreaProvider>
  );
}
