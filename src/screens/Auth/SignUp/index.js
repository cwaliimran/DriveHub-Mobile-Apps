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
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';

const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();
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
    <View style={styles.container}>
      <AppHeader title="Drive Hub" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Title */}
        <Text style={styles.heading}>{t('signup.title')}</Text>

<TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
  {avatar ? (
    <Image source={{ uri: avatar }} style={styles.avatar} />
  ) : (
    <Image source={Icons.camera} style={styles.cameraIcon} />
  )}
</TouchableOpacity>

        {/* Full Name */}
        <Text style={styles.label}>{t('signup.fullname')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.person} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='John Doe'
            placeholderTextColor="#999"
          />
        </View>

        {/* Phone */}
        <Text style={styles.label}>{t('signup.phone')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.phone} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="+92 3344662345"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

        {/* Email */}
        <Text style={styles.label}>{t('signup.email')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.mail} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="john@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        {/* Vehicle */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={styles.label}>{t('signup.vehicleName')}</Text>
            <View style={styles.inputContainer}>
              <Image source={Icons.vehicle} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Camry"
                placeholderTextColor="#999"
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={styles.label}>{t('signup.vehicleModel')}</Text>
            <View style={styles.inputContainer}>
              <Image source={Icons.calendar} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="2022"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* Password */}
        <Text style={styles.label}>{t('signup.password')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('signup.password')}
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>{t('signup.confirmPassword')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('signup.confirmPassword')}
            placeholderTextColor="#999"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Image
              source={showConfirmPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <View style={styles.termsRow}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.termsText}>
            {t('signup.terms1')} <Text style={styles.link}>{t('signup.terms2')}</Text>
          </Text>
        </View>

        {/* Create Account Button */}
        <View style={styles.primaryButtonWrapper}>
        <PrimaryButton title={t('signup.createBtn')} onPress={() => navigation.navigate('VerifyOTP')} />
</View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('signup.already')}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerLink}>{t('signup.signin')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20, paddingBottom: 40 },
  heading: {
    fontSize: 25,
    fontFamily: typography.fontBold,
    marginBottom: 25,
    color: colors.textLight,
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
    cameraIcon: { 
    width: 121,  // Increased from 30 to 50
    height: 121, 
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 5,
    color: colors.textLight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  icon: { width: 20, height: 20, tintColor: '#888', marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
  },
  eyeIcon: { width: 20, height: 20, tintColor: '#888' },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 10,
    borderRadius: 4,
  },
  termsText: { fontSize: 14, fontFamily: typography.fontRegular, color: '#797979' },
  link: { color: colors.primary, fontFamily: typography.fontBold },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: '#797979',
  },

primaryButtonWrapper: {
  width: '110%',       // match input box width
  alignSelf: 'center', // center horizontally inside container
},

  footerLink: {
    fontSize: 13,
    fontFamily: typography.fontBold,
    color: colors.primary,
    marginLeft: 5,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default SignUpScreen;
