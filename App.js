import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import lightTheme from './src/theme/light';
import darkTheme from './src/theme/dark';
import { StatusBar } from 'react-native';
import useTheme from './src/hooks/useTheme';

import './src/localization/i18n';   // ✅ ensures i18n is initialized
import { LogBox } from 'react-native';

// ✅ Ignore ALL warnings
LogBox.ignoreAllLogs(true);

export default function App() {
    const theme = useTheme();
  const colorScheme = Appearance.getColorScheme();

  return (
    <Suspense fallback={null}>
            <StatusBar
        translucent
        backgroundColor={theme.background} // <- White in light, #121212 in dark
        barStyle={theme.background === '#121212' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Suspense>
  );
}
