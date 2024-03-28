import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import MaterialTopTab from '../Components/MaterialTopTab';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      
      />
      
      <Stack.Screen
      name={navigationStrings.INITIAL_AUTH}/>
    

    </>
  );
}

