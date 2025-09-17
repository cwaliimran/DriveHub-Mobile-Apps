import { Fonts } from '../assets/assets';

console.log('Fonts object:', Fonts);

const typography = {
  fontRegular: Fonts?.regular ?? 'System',
  fontMedium: Fonts?.medium ?? 'System',
  fontSemiBold: Fonts?.semibold ?? 'System',
  fontBold: Fonts?.bold ?? 'System',
};

export default typography;
