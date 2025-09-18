import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const { width } = Dimensions.get('window');

const OTPInput = ({ code, setCode, length = 6, hideDelay = 2 }) => {
  const inputs = useRef([]);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  const handleChange = (text, index) => {
    // ✅ sanitize: only numeric
    const digit = text.replace(/[^0-9]/g, '');

    const newCode = code.split('');
    newCode[index] = digit;
    setCode(newCode.join(''));

    if (digit && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (digit) {
      setTimeout(() => {
        setHiddenIndexes((prev) => [...prev, index]);
      }, hideDelay * 1000);
    } else {
      setHiddenIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();

      const newCode = code.split('');
      newCode[index - 1] = '';
      setCode(newCode.join(''));
      setHiddenIndexes((prev) => prev.filter((i) => i !== index - 1));
    }
  };

  return (
    <View style={styles.container}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <TextInput
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            secureTextEntry={hiddenIndexes.includes(i)}
            value={code[i] || ''}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    width: width / 8,
    height: width / 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
  },
});

export default OTPInput;
