import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import lightTheme from './src/theme/light';
import darkTheme from './src/theme/dark';

import './src/localization/i18n';   // ✅ ensures i18n is initialized
import { LogBox } from 'react-native';

// ✅ Ignore ALL warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <Suspense fallback={null}>
      <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Suspense>
  );
}
