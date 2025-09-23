import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { Icons, Fonts } from '../assets/assets';
import useTheme from '../hooks/useTheme';

// Screens
import HomeScreen from '../screens/Home';
import AutomationScreen from '../screens/Automation';
import HistoryScreen from '../screens/History';
import EarningScreen from '../screens/Earning';

const { width, height } = Dimensions.get('window');
const circleSize = width * 0.15;

const BottomTabNavigator = () => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const _renderIcon = (routeName, selectedTab) => {
    let icon, label;

    switch (routeName) {
      case 'Home':
        icon = selectedTab === 'Home' ? Icons.bottomHomeSelected : Icons.bottomHome;
        label = 'Home';
        break;
      case 'Automation':
        icon =
          selectedTab === 'Automation'
            ? Icons.bottomAutomationSelected
            : Icons.bottomAutomation;
        label = 'Automation';
        break;
      case 'History':
        icon =
          selectedTab === 'History'
            ? Icons.bottomHistorySelected
            : Icons.bottomHistory;
        label = 'History';
        break;
      case 'Earning':
        icon =
          selectedTab === 'Earning'
            ? Icons.bottomEarningSelected
            : Icons.bottomEarning;
        label = 'Earning';
        break;
      default:
        icon = null;
        label = '';
    }

    return (
      <View style={styles.tabIconContainer}>
        {icon && <Image source={icon} style={styles.tabIcon} />}
        <Text
          style={[
            styles.tabLabel,
            {
              color: selectedTab === routeName ? theme.primary : theme.textSecondary,
              fontFamily: selectedTab === routeName ? Fonts.bold : Fonts.regular,
            },
          ]}
        >
          {label}
        </Text>
      </View>
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => (
    <TouchableOpacity onPress={() => navigate(routeName)} style={styles.tabbarItem}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );

  const handleCenterButtonPress = () => {
    setIsPlaying((prev) => !prev);
    console.log('Center button pressed, playing:', !isPlaying);
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      height={70}
      bgColor={theme.bottom_background}
      circleWidth={50}
      initialRouteName="Home"
      borderTopLeftRight={false}
      screenOptions={{ headerShown: false }}
      renderCircle={() => (
        <View style={[styles.btnCircleUp, { backgroundColor: theme.primary_bottom }]}>
          <TouchableOpacity
            style={styles.centerButton}
            onPress={handleCenterButtonPress}
          >
            <Image
              source={isPlaying ? Icons.bottomPause : Icons.bottomPlay}
              style={[styles.centerPlayIcon]}
            />
          </TouchableOpacity>
        </View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen name="Home" component={HomeScreen} position="LEFT" />
      <CurvedBottomBar.Screen
        name="Automation"
        component={AutomationScreen}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="History"
        component={HistoryScreen}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Earning"
        component={EarningScreen}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 13,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnCircleUp: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -(circleSize / 3),
  },
  centerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  centerPlayIcon: {
    top: 0,                 
    width: 42,
    height: 42,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabIconContainer: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
});

export default BottomTabNavigator;
