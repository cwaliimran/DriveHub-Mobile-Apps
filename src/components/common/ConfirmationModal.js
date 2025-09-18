import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Images } from '../../assets/assets'; // account-created.png
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { useTranslation } from 'react-i18next';

const ConfirmationModal = ({ visible, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal
  transparent
  animationType="fade"
  visible={visible}
  onRequestClose={onClose}
  statusBarTranslucent={true}  
>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Icon */}
          <Image
            source={Images.accountCreated}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.title}>{t('confirmation.accountCreatedTitle')}</Text>

          {/* Description */}
          <Text style={styles.description}>
            {t('confirmation.accountCreatedDesc')}
          </Text>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>{t('confirmation.continue')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 147,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
});

export default ConfirmationModal;
