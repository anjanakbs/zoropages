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
import strings from '../../constants/lang';

const Signup = ({navigation}) => {
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    <LinearGradient
      colors={[colors.white, colors.white, colors.white]}
      style={styles.linearGradient}>
      <WrapperContainer>
        <HeaderComp leftIcon={imagePath.backicon} />
        <Text style={styles.language}>English (US) ^</Text>
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
          <TextInputWithLabel
            placeholder={strings.EMAIL_ADDRESS}
            extraStyle={{width: width - 60, alignSelf: 'center'}}
          />
          <TextInputWithLabel
            placeholder={strings.PASSWORD}
            extraStyle={{width: width - 60, alignSelf: 'center'}}
          />
          <View style={styles.button}>
            <ButtonComp
              btnText={strings.LOGIN}
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
            btnText={strings.Create_New_Account}
            btnTextStyle={{color: 'green', fontFamily: fontFamily.medium}}
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
  );
};
const styles = StyleSheet.create({
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
  linearGradient: {
    flex: 1,
  },
  language:{
    textAlign:'center'
  }
});

export default Signup;
