import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import imagePath from '../../constants/imagePath'

const OtpVerification = () => {
    const goToScreen = screen => {
        navigation.navigate(screen);
      };
  return (
    <WrapperContainer>
        <HeaderComp 
         leftIcon={imagePath.backicon}/>
    <View>
      <Text>OtpVerification</Text>
    </View>
    </WrapperContainer>
  )
}

export default OtpVerification