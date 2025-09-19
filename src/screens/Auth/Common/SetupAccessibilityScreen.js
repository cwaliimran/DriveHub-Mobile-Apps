import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Images } from '../../../assets/assets';
import typography from '../../../theme/typography';
import { useTranslation, Trans } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';

const SetupAccessibilityScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [showNotice, setShowNotice] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setShowNotice(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showNotice) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Image source={Images.setupPicture} style={styles.image} resizeMode="contain" />
        <Text style={[styles.loadingText, { color: theme.textSecondary }]}>
          <Trans i18nKey="setup.loading" components={{ bold: <Text style={styles.boldBlue}></Text> }} />
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Icon */}
      <Image source={Images.accessibility} style={styles.icon} resizeMode="contain" />

      {/* Title */}
      <Text style={[styles.title, { color: theme.text }]}>{t('setup.accessibilityTitle')}</Text>

      {/* Description */}
      <Text style={[styles.description, { color: theme.textSecondary }]}>
        <Trans i18nKey="setup.accessibilityDesc" components={{ bold: <Text style={styles.boldBlue} /> }} />
      </Text>

      {/* Bullet Points */}
      <View style={styles.points}>
        <Text style={[styles.point, { color: theme.textSecondary }]}>
          • <Trans i18nKey="setup.points.data" components={{ bold: <Text style={styles.bold} /> }} />
        </Text>
        <Text style={[styles.point, { color: theme.textSecondary }]}>
          • <Trans i18nKey="setup.points.privacy" components={{ bold: <Text style={styles.bold} /> }} />
        </Text>
        <Text style={[styles.point, { color: theme.textSecondary }]}>
          • <Trans i18nKey="setup.points.control" components={{ bold: <Text style={styles.bold} /> }} />
        </Text>
      </View>

      {/* Final Note */}
      <Text style={[styles.note, { color: theme.textSecondary }]}>
        <Trans i18nKey="setup.finalNote" components={{ bold: <Text style={styles.boldBlue} /> }} />
      </Text>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={[styles.skip, { color: theme.textSecondary }]}>{t('setup.skip')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.allowBtn, { backgroundColor: theme.primary }]}>
          <Text style={styles.allowText}>{t('setup.allow')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 250, height: 250, marginBottom: 20 },
  loadingText: { fontSize: 14, fontFamily: typography.fontRegular, textAlign: 'center' },
  boldBlue: { fontFamily: typography.fontBold, color: '#007BFF' }, // stays brand blue
  bold: { fontFamily: typography.fontBold },
  icon: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 25, fontFamily: typography.fontBold, marginBottom: 15 },
  description: { fontSize: 14, fontFamily: typography.fontRegular, marginBottom: 15, textAlign: 'left' },
  points: { alignSelf: 'stretch', marginBottom: 15 },
  point: { fontSize: 14, fontFamily: typography.fontRegular, marginBottom: 8 },
  note: { fontSize: 14, fontFamily: typography.fontRegular, marginBottom: 30 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  skip: { fontSize: 14, fontFamily: typography.fontRegular },
  allowBtn: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  allowText: { fontSize: 14, fontFamily: typography.fontMedium, color: '#fff' },
});

export default SetupAccessibilityScreen;
