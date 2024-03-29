import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  InitialAuth,
  Login,
  Signup,
  OtpVerification,
  ForgotPassword,
  OnBoarding,
} from '../Screens';
import TabRoutes from './TabRoutes';
import LoginHomeScreen from '../Screens/LogInHomeScreen/LoginHomeScreen';
import FriendStories from '../Screens/Home/FriendStories';
import Popular from '../Screens/Home/Popular';
import SearchPeople from '../Screens/SearchFriend/SearchPeople';
import MaterialTopTab from '../Components/MaterialTopTab';
import Following from '../Screens/SearchFriend/Following';

export default function (Stack, isFirstTime) {
  console.log('auth stack', isFirstTime);
  return (
    <>
      {/* {!isFirstTime && (
        <Stack.Screen
          name={navigationStrings.ON_BOARDING}
          component={OnBoarding}
          options={{headerShown: false}}
        />
      )} */}
      {/* <Stack.Screen
        name={navigationStrings.INITIAL_AUTH}
        component={InitialAuth}
        options={{headerShown: false, gestureEnabled:true }}
      /> */}
       <Stack.Screen
        name={navigationStrings.LogInHomeScreen}
        component={LoginHomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'TabRoutes'}
        component={TabRoutes}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.FriendStories}
        component={FriendStories}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.MaterialTopTab}
        component={MaterialTopTab}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Popular}
        component={Popular}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.SearchPeople}
        component={SearchPeople}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Following}
        component={Following}
        options={{headerShown: false}}
      />
      
    </>
  );
}
