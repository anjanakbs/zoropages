import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {height, textScale, width} from '../../styles/responsiveSize';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from '../../styles/fontFamily';

const OtpVerification = ({navigation}) => {
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    // <LinearGradient
    //   colors={['#5d9475', colors.white, colors.white]}
    //   style={styles.linearGradient}>
    <WrapperContainer style={{}}>
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
        <Text style={styles.heading}>Create an account</Text>
      </View>
      <View style={styles.inputview}>
        <TextInputWithLabel
          placeholder="Username"
          extraStyle={{width: width - 60, alignSelf: 'center'}}
        />
        <TextInputWithLabel
          placeholder="Email"
          extraStyle={{width: width - 60, alignSelf: 'center'}}
        />
        <TextInputWithLabel
          placeholder="Phone"
          extraStyle={{width: width - 60, alignSelf: 'center'}}
        />
        <TextInputWithLabel
          placeholder="Date Of Birth"
          extraStyle={{width: width - 60, alignSelf: 'center'}}
        />
        <TextInputWithLabel
          placeholder="Password"
          extraStyle={{width: width - 60, alignSelf: 'center'}}
        />
      </View>
      <View>
        <ButtonComp
          btnText="SignUp"
          btnStyle={{
            marginTop: 20,
            width: width - 50,
            alignSelf: 'center',
            borderRadius: 25,
            alignSelf: 'center',
            backgroundColor: colors.darkgreen,
          }}
          btnTextStyle={{color: colors.white, fontFamily: fontFamily.bold}}
          onPress={() => goToScreen(navigationStrings.TAB_ROUTES)}
        />
      </View>
    </WrapperContainer>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    fontSize: textScale(25),
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
  },
  inputview: {
    marginHorizontal: 16,
  },
  linearGradient: {
    flex: 1,
  },
});
export default OtpVerification;
