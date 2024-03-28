//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';

// create a component
const InitialAuth = ({navigation}) => {

    const goToScreen = (screen) =>{
        navigation.navigate(screen)
    }
    return (
        <WrapperContainer>
        <View style={styles.container}>
        <ButtonComp 
                btnText='Go to Login Home Screen'
                btnTextStyle={{color:colors.white}}
                onPress={()=>goToScreen(navigationStrings.LogInHomeScreen)}
            />
            <ButtonComp 
                btnText='Go to Login Screen'
                btnTextStyle={{color:colors.white}}
                onPress={()=>goToScreen(navigationStrings.LOGIN)}
            />
           
              <ButtonComp 
                btnText='Go to Signup Screen'
                btnTextStyle={{color:colors.white}}
                onPress={()=>goToScreen(navigationStrings.SIGNUP)}
            />
              <ButtonComp 
                btnTextStyle={{color:colors.white}}
                btnText='Go to Forgot Password Screen'
                onPress={()=>goToScreen(navigationStrings.FORGOT_PASSWORD)}
            />
              <ButtonComp 
                btnTextStyle={{color:colors.white}}
                btnText='Go to Otp Verfication Screen'
                onPress={()=>goToScreen(navigationStrings.OTP_VERIFICATION)}
            />
        </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default InitialAuth;
