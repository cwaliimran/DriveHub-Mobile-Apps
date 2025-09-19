import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Images } from '../../assets/assets';
import typography from '../../theme/typography';
import useTheme from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const ConfirmationModal = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          {/* Icon */}
          <Image
            source={Images.accountCreated}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={[styles.title, { color: theme.text }]}>
            {t('confirmation.accountCreatedTitle')}
          </Text>

          {/* Description */}
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {t('confirmation.accountCreatedDesc')}
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={onClose}
          >
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
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
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
