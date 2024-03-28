//import liraries
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import fontFamily from '../../styles/fontFamily';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

const Signup = ({navigation}) => {
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    // <ImageBackground source={imagePath.background2} style={{flex:1}}>
    <LinearGradient
      // colors={[colors.offgreen, colors.offgreen, colors.offgreen]}
      colors={[colors.white, colors.white, colors.white]}
      style={styles.linearGradient}>
      <WrapperContainer>
        <HeaderComp leftIcon={imagePath.backicon} />
        <Image
          source={imagePath.logo}
          style={{
            height: 150,
            width: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={styles.mainview}>
          <View style={styles.container}>
            {/* <Text style={styles.heading}>Welcome back</Text> */}
            {/* <Text style={styles.maintext}>Login to your account</Text> */}
          </View>
          <TextInputWithLabel
            placeholder="Email"
            extraStyle={{width: width - 60, alignSelf: 'center'}}
          />
          <TextInputWithLabel
            placeholder="Password"
            extraStyle={{width: width - 60, alignSelf: 'center'}}
          />
          <View style={styles.button}>
            <ButtonComp
              btnText="LogIn"
              btnTextStyle={{color: 'white', fontFamily: fontFamily.bold}}
              btnStyle={{
                marginTop: 20,
                borderRadius: 30,
                width: width - 50,
                alignSelf: 'center',
                backgroundColor: colors.darkgreen,
              }}
              onPress={() => goToScreen(navigationStrings.TAB_ROUTES)}
            />
            <Text
              style={styles.buttontext}
              onPress={() => goToScreen(navigationStrings.FORGOT_PASSWORD)}>
              Forgot password ?
            </Text>
          </View>
          <ButtonComp
            btnText="Create new account"
            btnTextStyle={{color: 'black', fontFamily: fontFamily.medium}}
            btnStyle={{
              marginTop: width / 2,
              borderRadius: 30,
              width: width - 50,
              alignSelf: 'center',
              backgroundColor: colors.white,
            }}
            onPress={() => goToScreen(navigationStrings.SIGNUP)}
          />
        </View>
      </WrapperContainer>
    </LinearGradient>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainview: {
    // backgroundColor:colors.lightgrey,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: textScale(30),
    fontFamily: fontFamily.bold,
    color: colors.black,
  },
  maintext: {
    color: colors.black,
  },
  buttontext: {
    alignSelf: 'center',
    marginVertical: 8,
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: moderateScale(14),
  },
  button: {
    // alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
  },
});

export default Signup;
