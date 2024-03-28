import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {height, moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import {LogInHomeScreen, Signup} from '..';
import HeaderComp from '../../Components/HeaderComp';
import fontFamily from '../../styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

const LoginHomeScreen = ({navigation}) => {
  const onLogin = () => {
    actions.login(true);
  };
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    // <ImageBackground source={imagePath.modal3} style={{flex:1,}} >
    <LinearGradient
      //  colors={[colors.lightgrey, colors.lightgrey, colors.lightgrey]}
      colors={[colors.white, colors.white, colors.white]}
      style={styles.linearGradient}>
      <WrapperContainer>
        <View style={styles.container}>
          <Image
            source={imagePath.logo}
            style={{
              height: 150,
              width: 200,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginBottom: 80,
            }}
          />
          <Text style={styles.heading}> Find New Friends Nearby</Text>
          <View style={styles.maintext}>
            <Text style={styles.text}>
              With millions of user all over the world we given you the ability
              to connect with the people no metter where you are
            </Text>
          </View>
          <View style={styles.btn}>
            <ButtonComp
              btnText="LogIn"
              btnStyle={{borderRadius: 30, backgroundColor: colors.lightgrey}}
              onPress={() => goToScreen(navigationStrings.LOGIN)}
              btnTextStyle={{
                fontFamily: fontFamily.bold,
                color: colors.darkgreen,
              }}
            />
          </View>
          <View style={styles.btn2}>
            <ButtonComp
              btnText="Sign Up"
              btnStyle={{borderRadius: 30, backgroundColor: colors.darkgreen}}
              btnTextStyle={{color: colors.white, fontFamily: fontFamily.bold}}
              onPress={() => goToScreen(navigationStrings.SIGNUP)}
            />
          </View>
        </View>
        {/* <View style={styles.loginwith}>
        <View style={styles.image}>
          <View style={styles.facebook}>
            <Image source={imagePath.facebook}  />
          </View>
          <View style={styles.facebook}>
            <Image source={imagePath.twitter} style={{height:45,width:45}} />
          </View>
          <View style={styles.facebook}>
            <Image source={imagePath.google2} />
          </View>
        </View>
      </View> */}
      </WrapperContainer>
    </LinearGradient>

    /* </ImageBackground> */
  );
};
export default LoginHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginTop:height/9
  },
  heading: {
    textAlign: 'center',
    fontSize: textScale(25),
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginBottom: moderateScale(10),
  },
  text: {
    textAlign: 'center',
    marginBottom: moderateScale(10),
    color: colors.black,
    fontFamily: fontFamily.medium,
  },
  btn: {
    marginBottom: 15,
    marginTop: 10,
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
  loginwith: {
    marginBottom: 10,
  },
  facebook: {
    marginTop: moderateScale(10),
  },
  linearGradient: {
    flex: 1,
  },
});
