import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const OnboardingFooter = ({ total, current, onNext }) => {
  return (
    <View style={styles.container}>
      {/* Progress dots */}
      <View style={styles.dotsRow}>
        {Array.from({ length: total }).map((_, idx) => (
          <View
            key={idx}
            style={[styles.dot, idx === current ? styles.dotActive : styles.dotInactive]}
          />
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Image source={Icons.arrow} style={styles.arrow} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
dot: {
  width: 6,
  height: 16,
  borderRadius: 3,
  marginHorizontal: 4,
},
dotActive: {
  backgroundColor: colors.primary,
  height: 28,   // taller for active
},
dotInactive: {
  backgroundColor: '#ddd',
},
nextButton: {
  width: 48,
  height: 48,
  backgroundColor: colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
  transform: [{ rotate: '45deg' }], // rotate square → diamond
  borderRadius: 12, // keeps edges a bit rounded
},
arrow: {
  width: 28,
  height: 28,
  tintColor: '#fff',
  transform: [{ rotate: '-45deg' }], // rotate back the arrow so it looks normal
},
});

export default OnboardingFooter;
