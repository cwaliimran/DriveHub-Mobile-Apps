// src/context/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import lightTheme from '../theme/lightTheme';
import darkTheme from '../theme/darkTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState('light'); // default
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem('appTheme');
      if (saved) {
        updateTheme(saved);
      }
    })();
  }, []);

  const updateTheme = async (key) => {
    setThemeKey(key);
    setTheme(key === 'dark' ? darkTheme : lightTheme);
    await AsyncStorage.setItem('appTheme', key);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeKey, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
