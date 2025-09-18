import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import { Icons } from '../../assets/assets'; 
import { useTranslation } from 'react-i18next';

const VerifyAlternativeModal = ({ 
  visible, 
  onClose, 
  destination, 
  navigation 
  
}) => {
  const { t } = useTranslation();

  // check if email or phone
  const isEmail = destination.includes('@');

  const options = isEmail
    ? [
        { key: 'email', label: t('verifyUber.alt.email'), icon: Icons.bottomMail, color: '#007BFF' },
        { key: 'password', label: t('verifyUber.alt.password'), icon: Icons.bottomPassword, color: '#0097A7' },
        { key: 'phone', label: t('verifyUber.alt.changePhone'), icon: Icons.bottomPhone, color: '#B8860B' },
      ]
    : [
        { key: 'password', label: t('verifyUber.alt.password'), icon: Icons.bottomPassword, color: '#0097A7' },
        { key: 'phone', label: t('verifyUber.alt.changePhone'), icon: Icons.bottomPhone, color: '#B8860B' },
      ];

  const handleSelect = (key) => {
    if (key === 'email' || key === 'phone') {
      // Go back to LinkUberScreen
      navigation.navigate('LinkUber');
    } 
    else if (key === 'password') {
      console.log('Handle password verification flow here');
    }
    onClose();
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity style={styles.container} activeOpacity={1}>
          <Text style={styles.title}>{t('verifyUber.alt.title')}</Text>

          {options.map((opt) => (
            <TouchableOpacity
              key={opt.key}
              style={[styles.option, { backgroundColor: opt.color }]}
              onPress={() => handleSelect(opt.key)}
            >
              <Image source={opt.icon} style={styles.icon} resizeMode="contain" />
              <Text style={styles.optionText}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: typography.fontBold,
    color: colors.textLight,
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
});

export default VerifyAlternativeModal;
