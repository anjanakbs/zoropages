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

const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
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
        name={navigationStrings.POST}
        component={Post}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={imagePath.active_message}
                style={{
                  tintColor: colors.darkgreen,
                }}
              />
            ) : (
              <Image source={imagePath.inactive_message} />
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
