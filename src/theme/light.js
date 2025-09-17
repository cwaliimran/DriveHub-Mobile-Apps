import colors from './colors';
import typography from './typography';

export default {
  dark: false,
  colors: {
    background: colors.backgroundLight,
    text: colors.textLight,
    primary: colors.primary,
    secondary: colors.secondary,
  },
  fonts: {
    regular: { fontFamily: typography.fontRegular, fontWeight: 'normal' },
    medium: { fontFamily: typography.fontMedium, fontWeight: '500' },
    semibold: { fontFamily: typography.fontSemiBold, fontWeight: '600' },
    bold: { fontFamily: typography.fontBold, fontWeight: 'bold' },
  },
};
