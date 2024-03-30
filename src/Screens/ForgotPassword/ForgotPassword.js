import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import {height, textScale, width} from '../../styles/responsiveSize';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../../styles/fontFamily';

const ForgotPassword = ({navigation}) => {
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    <LinearGradient
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
        <View style={styles.container}>
          <Text style={styles.heading}>Forgot Password</Text>
          <View style={styles.textview}>
            <Text style={styles.maintext}>
              Enter your Username,email or mobile number.
            </Text>
          </View>
          <View style={styles.inputview}>
            <TextInputWithLabel
              placeholder="Your Email"
              extraStyle={{width: width - 60, alignSelf: 'center'}}
            />
          </View>
          <View style={styles.button}>
            <ButtonComp
              btnText="Send"
              btnStyle={{
                marginTop: 30,
                borderRadius: 30,
                width: width - 50,
                alignSelf: 'center',
                backgroundColor: colors.darkgreen,
              }}
              btnTextStyle={{color: colors.white, fontFamily: fontFamily.bold}}
              onPress={() => goToScreen(navigationStrings.SIGNUP)}
            />
          </View>
        </View>
      </WrapperContainer>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  heading: {
    fontSize: textScale(25),
    marginBottom: 10,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
  },
  maintext: {
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    fontSize: textScale(18),
  },
  button: {
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
  },
});

export default ForgotPassword;
