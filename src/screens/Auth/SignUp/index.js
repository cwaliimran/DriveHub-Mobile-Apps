import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';

const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setAvatar(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title="Drive Hub" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Title */}
        <Text style={[styles.heading, { color: theme.text }]}>{t('signup.title')}</Text>

        <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <Image source={Icons.camera} style={styles.cameraIcon} />
          )}
        </TouchableOpacity>

        {/* Full Name */}
        <Text style={[styles.label, { color: theme.text }]}>{t('signup.fullname')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.person} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="John Doe"
            placeholderTextColor={theme.textSecondary}
          />
        </View>

        {/* Phone */}
        <Text style={[styles.label, { color: theme.text }]}>{t('signup.phone')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.phone} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="+92 3344662345"
            placeholderTextColor={theme.textSecondary}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email */}
        <Text style={[styles.label, { color: theme.text }]}>{t('signup.email')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.mail} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="john@gmail.com"
            placeholderTextColor={theme.textSecondary}
            keyboardType="email-address"
          />
        </View>

        {/* Vehicle */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={[styles.label, { color: theme.text }]}>{t('signup.vehicleName')}</Text>
            <View style={[styles.inputContainer, { borderColor: theme.border }]}>
              <Image source={Icons.vehicle} style={[styles.icon, { tintColor: theme.textSecondary }]} />
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="Camry"
                placeholderTextColor={theme.textSecondary}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={[styles.label, { color: theme.text }]}>{t('signup.vehicleModel')}</Text>
            <View style={[styles.inputContainer, { borderColor: theme.border }]}>
              <Image source={Icons.calendar} style={[styles.icon, { tintColor: theme.textSecondary }]} />
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="2022"
                placeholderTextColor={theme.textSecondary}
              />
            </View>
          </View>
        </View>

        {/* Password */}
        <Text style={[styles.label, { color: theme.text }]}>{t('signup.password')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder={t('signup.password')}
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={[styles.label, { color: theme.text }]}>{t('signup.confirmPassword')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder={t('signup.confirmPassword')}
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image
              source={showConfirmPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
            />
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <View style={styles.termsRow}>
          <TouchableOpacity style={[styles.checkbox, { borderColor: theme.textSecondary }]} />
          <Text style={[styles.termsText, { color: theme.textSecondary }]}>
            {t('signup.terms1')} <Text style={[styles.link, { color: theme.primary }]}>{t('signup.terms2')}</Text>
          </Text>
        </View>

        {/* Create Account Button */}
        <View style={styles.primaryButtonWrapper}>
          <PrimaryButton title={t('signup.createBtn')} onPress={() => navigation.navigate('VerifyOTP')} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>{t('signup.already')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[styles.footerLink, { color: theme.primary }]}>{t('signup.signin')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 40 },
  heading: {
    fontSize: 25,
    fontFamily: typography.fontBold,
    marginBottom: 25,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { width: '100%', height: '100%', borderRadius: 60 },
  cameraIcon: { width: 121, height: 121 },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
        paddingVertical: 3,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  eyeIcon: { width: 20, height: 20 },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 4,
  },
  termsText: { fontSize: 14, fontFamily: typography.fontRegular },
  link: { fontFamily: typography.fontBold },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  footerLink: {
    fontSize: 13,
    fontFamily: typography.fontBold,
    marginLeft: 5,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default SignUpScreen;
