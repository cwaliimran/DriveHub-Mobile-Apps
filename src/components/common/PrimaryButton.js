import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const PrimaryButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    width: '100%',

    // 👇 Same as LanguageOption box
    alignSelf: 'center',
    marginHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  disabled: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
});


export default PrimaryButton;
