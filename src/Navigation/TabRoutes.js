import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Image, StyleSheet} from 'react-native';
import {Home, Search, Post, Notification, Profile} from '../Screens';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reels from '../Screens/Reels/Reels';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  <Stack.Navigator 
  initialRouteName={'Home'}
  
  >
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Reels" component={Reels} /> */}
  </Stack.Navigator>;
}
const TabRoutes = props => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: colors.blackColor,
        tabBarInactiveTintColor: 'grey',
        // tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.Home}
                style={{
                  tintColor: colors.darkgreen,
                }}
              />
            ) : (
              <Image source={imagePath.HomeIcon} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.inactive_real}
                style={{
                  tintColor: colors.darkgreen,
                }}
              />
            ) : (
              <Image source={imagePath.active_real} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.Reels}
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.Reels}
                style={{
                  tintColor: colors.darkgreen,
                  height: 20,
                  width: 20,
                }}
              />
            ) : (
              <Image
                source={imagePath.Reels}
                style={{
                  // tintColor: colors.darkgreen,
                  height: 20,
                  width: 20,
                }}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.active_notification}
                style={{
                  tintColor: colors.darkgreen,
                }}
              />
            ) : (
              <Image source={imagePath.inactive_notification} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.active_profile}
                style={{
                  tintColor: colors.darkgreen,
                }}
              />
            ) : (
              <Image source={imagePath.inactive_profile} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    //height: moderateScale(60)
  },
});

export default TabRoutes;
