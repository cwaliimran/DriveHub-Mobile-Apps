import { useColorScheme } from 'react-native';
import lightTheme from '../theme/lightTheme';
import darkTheme from '../theme/darkTheme';

export default function useTheme() {
  const scheme = useColorScheme(); // returns 'light' | 'dark'
  return scheme === 'dark' ? darkTheme : lightTheme;
}
