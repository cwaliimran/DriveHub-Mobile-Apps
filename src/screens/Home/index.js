import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
                onNotificationPress={()  => navigation.navigate('Notifications')}
        showNotificationDot={true}
      />
      {/* <Text style={{ color: theme.text, marginTop: 20 }}>This is Home Screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;
