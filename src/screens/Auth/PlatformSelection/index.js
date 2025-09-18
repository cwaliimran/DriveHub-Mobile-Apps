import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PlatformCard from '../../../components/common/PlatformCard';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';

const PlatformSelectionScreen = ({ navigation }) => {
  const { t } = useTranslation();
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

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

      {/* Heading */}
      <Text style={styles.heading}>{t('platform.heading')}</Text>

      {/* Platform Cards */}
      <View style={{ marginTop: 20 }}>
        {platforms.map((p) => (
          <PlatformCard
            key={p.key}
            title={p.title}
            image={p.image}
            selected={selected.includes(p.key)}
            onPress={() => toggleSelection(p.key)}
          />
        ))}
      </View>

      {/* Button */}
      <View style={styles.bottom}>
        <PrimaryButton
          title={t('platform.select')}
          disabled={selected.length === 0}
          onPress={() => {
            console.log('Selected services:', selected);
            navigation.replace('Home'); // next step
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  logo: { width: 160, height: 60, alignSelf: 'center', marginBottom: 20 },
  heading: {
    fontSize: 18,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
    textAlign: 'left',
  },
  bottom: {
      width: '110%',       // match input box width
  alignSelf: 'center', // center horizontally inside container
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default PlatformSelectionScreen;
