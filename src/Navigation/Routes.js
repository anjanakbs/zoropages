import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import AuthScreen from './AuthScreen';
import MainStack from './MainStack';

// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.auth);
  const isFirstTime = useSelector(state => state.isFirstTime.isFirstTime);

  console.log('user data', userData);
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{headerShown: false, gestureEnabled: true}}
      >
        {
          // userData?.isLogin ? <>{MainStack(Stack)}</>
          false ? (
            <>{MainStack(Stack)}</>
          ) : (
            <>{AuthScreen(Stack, isFirstTime)}</>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
