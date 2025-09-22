import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const { width } = Dimensions.get('window');

const DoorDashOTPInput = ({ code, setCode, length = 4, hideDelay = 2 }) => {
  const inputs = useRef([]);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  const handleChange = (text, index) => {
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
    justifyContent: 'center',
    marginVertical: 1,
  },
  input: {
    width: width / 7,  // fit 4 boxes evenly across
    height: width / 7,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: typography.fontMedium,
    color: colors.secondary,
    marginHorizontal: 5,
  },
});

export default DoorDashOTPInput;
