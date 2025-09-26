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
import { Icons } from '../../../../../assets/assets';
import typography from '../../../../../theme/typography';
import PrimaryButton from '../../../../../components/common/PrimaryButton'; 
import ResendButton from '../../../../../components/common/ResendButton'; 
import AppHeader from '../../../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../../hooks/useTheme';

const EditProfileScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [avatar, setAvatar] = useState(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setAvatar(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('editProfile.title')} onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Avatar */}
        <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <Image source={Icons.camera} style={styles.cameraIcon} />
          )}
        </TouchableOpacity>

        {/* Full Name */}
        <Text style={[styles.label, { color: theme.text }]}>{t('editProfile.fullname')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.person} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="John Doe"
            placeholderTextColor={theme.textSecondary}
          />
        </View>

        {/* Phone */}
        <Text style={[styles.label, { color: theme.text }]}>{t('editProfile.phone')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.phone} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="+1 555 010 1234"
            placeholderTextColor={theme.textSecondary}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email */}
        <Text style={[styles.label, { color: theme.text }]}>{t('editProfile.email')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.mail} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="johndoe@gmail.com"
            placeholderTextColor={theme.textSecondary}
            keyboardType="email-address"
          />
        </View>

        {/* Vehicle Info */}
        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={[styles.label, { color: theme.text }]}>{t('editProfile.vehicleName')}</Text>
            <View style={[styles.inputContainer, { borderColor: theme.border }]}>
              <Image source={Icons.vehicle} style={[styles.icon, { tintColor: theme.textSecondary }]} />
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="Toyota Camry"
                placeholderTextColor={theme.textSecondary}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={[styles.label, { color: theme.text }]}>{t('editProfile.vehicleModel')}</Text>
            <View style={[styles.inputContainer, { borderColor: theme.border }]}>
              <Image source={Icons.calendar} style={[styles.icon, { tintColor: theme.textSecondary }]} />
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="2021"
                placeholderTextColor={theme.textSecondary}
              />
            </View>
          </View>
        </View>
{/* Buttons */}
<View style={styles.buttonsWrapper}>
  <ResendButton
    title={t('editProfile.resetPassword')}
       onPress={() => navigation.navigate('ResetPasswordMore')}
  />

  <PrimaryButton
    title={t('editProfile.saveChanges')}
    onPress={() => navigation.navigate('Profile')}
  />
</View>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 20 },
  avatarContainer: {
    width: 100,
    height: 100,
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
    marginBottom: 5,
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
buttonsWrapper: {
  marginTop: 100,   // ⬅ increase this
},

  saveBtnWrapper: {
    alignItems: 'center',
    width: '100%', // Make button take full width of the container
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default EditProfileScreen;
