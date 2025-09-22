import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '../../../assets/assets';
import typography from '../../../theme/typography';
import PlatformCard from '../../../components/common/PlatformCard';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';

const PlatformSelectionScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selected, setSelected] = useState([]);

  const platforms = [
    { key: 'lyft', title: 'Lyft', image: Images.lyft },
    { key: 'uber', title: 'Uber', image: Images.uber },
    { key: 'doordash', title: 'DoorDash', image: Images.doorDash },
  ];

  const toggleSelection = (key) => {
    if (selected.includes(key)) {
      setSelected(selected.filter((item) => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  const handleContinue = () => {
    console.log('Selected services:', selected);

    if (selected.includes('lyft')) {
      navigation.replace('LinkLyft'); // ✅ Go to Lyft linking
    } else if (selected.includes('uber')) {
      navigation.replace('LinkUber'); // ✅ Go to Uber linking
    } else if (selected.includes('doordash')) {
      // Add screen when you build it
      navigation.replace('DoorDashAuth');
    } else {
      navigation.replace('LinkUber'); // fallback
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Logo */}
      <Image
        source={theme.background === '#121212' ? Images.logoDark : Images.logoLight}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={[styles.heading, { color: theme.text }]}>
        {t('platform.heading')}
      </Text>

      {/* Platform Cards */}
      <View style={{ marginTop: 20 }}>
        {platforms.map((p) => (
          <PlatformCard
            key={p.key}
            title={p.title}
            image={p.image}
            selected={selected.includes(p.key)}
            onPress={() => toggleSelection(p.key)}
            textColor={theme.text}
            borderColor={theme.border}
            backgroundColor={theme.card}
          />
        ))}
      </View>

      {/* Button */}
      <View style={styles.bottom}>
        <PrimaryButton
          title={t('platform.select')}
          disabled={selected.length === 0}
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  logo: { width: 160, height: 60, alignSelf: 'center', marginBottom: 20 },
  heading: {
    fontSize: 18,
    fontFamily: typography.fontSemiBold,
    textAlign: 'left',
  },
  bottom: {
    width: '110%',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default PlatformSelectionScreen;
