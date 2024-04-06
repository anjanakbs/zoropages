import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  InitialAuth,
  Login,
  Signup,
  OtpVerification,
  ForgotPassword,
  OnBoarding,
  Profile,
  Post,
} from '../Screens';
import TabRoutes from './TabRoutes';
import LoginHomeScreen from '../Screens/LogInHomeScreen/LoginHomeScreen';
import SearchPeople from '../Screens/SearchFriend/SearchPeople';
import MaterialTopTab from '../Components/MaterialTopTab';
import Following from '../Screens/SearchFriend/Following';
import BottomSheetComp from '../Components/BottomSheetComp';
import ModalSheet from '../Components/ModalSheet';

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
      {/* <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      /> */}
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
        name={navigationStrings.MaterialTopTab}
        component={MaterialTopTab}
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
       <Stack.Screen
        name={navigationStrings.ModalSheet}
        component={ModalSheet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.POST}
        component={Post}
        options={{headerShown: false}}
      />
    </>
  );
}
