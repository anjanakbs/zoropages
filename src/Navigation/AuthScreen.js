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
import MaterialTopTab from './MaterialTopTab';
import Following from '../Screens/SearchFriend/Following';
import BottomSheetComp from '../Components/BottomSheetComp';
import ModalSheet from '../Components/ModalSheet';
import SearchFriend from '../Screens/SearchFriend/SearchFriend';
import EditProfile from '../Screens/EditProfile/EditProfile';
import Name from '../Screens/EditProfile/Name';
import UserName from '../Screens/EditProfile/UserName';
import Pronouns from '../Screens/EditProfile/Pronouns';
import Bio from '../Screens/EditProfile/Bio';
import Addlink from '../Screens/EditProfile/Addlink';
import Gender from '../Screens/EditProfile/Gender';
import News from '../Screens/News/News';

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
        name={navigationStrings.SearchFriend}
        component={SearchFriend}
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
      <Stack.Screen
        name={navigationStrings.BottomSheetComp}
        component={BottomSheetComp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EditProfile}
        component={EditProfile}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Name}
        component={Name}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.UserName}
        component={UserName}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Pronouns}
        component={Pronouns}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Bio}
        component={Bio}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.Addlink}
        component={Addlink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.Gender}
        component={Gender}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.News}
        component={News}
        options={{headerShown: false}}
      />
    </>
  );
}
