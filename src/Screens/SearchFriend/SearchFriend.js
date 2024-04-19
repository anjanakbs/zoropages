import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Button, FlatList, TouchableOpacity, Keyboard} from 'react-native';
import {
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import WrapperContainer from '../../Components/WrapperContainer';
import Storycomponent from '../../Components/Storycomponent';

const SearchFriend = ({navigation}) => {
  
  return (
    <WrapperContainer>
      <View style={styles.inputstyle}>
        <View style={{marginTop:20}}>
      </View>
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TextInputWithLabel
          placeholder={strings.search}
          placeholderTextColor={colors.black}
          lefticon={imagePath.Searchicon}
          extraStyle={{paddingLeft: 20, width: width /1.2,paddingRight:20,}}
          onFocus={()=>{
            Keyboard.dismiss()
            navigation.navigate('SearchPeople')
        }}
        />
            </View>
          </View>
       
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  textstyle: {
    fontSize: textScale(25),
    fontFamily: fontFamily.medium,
    paddingHorizontal: moderateScale(10),
  },
  inputstyle: {
    justifyContent: 'center',
    flexDirection:'row',
    alignItems: 'center',
  },
  viewline: {
    backgroundColor: colors.lightgrey,
    height: 1,
    marginTop: 10,
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  Seeall: {
    // color: colors.darkgreen,
    fontFamily: fontFamily.medium,
    fontSize: textScale(20),
  },
  rsearch: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(20),
  },
  text:{
fontFamily:fontFamily.medium,
fontSize:textScale(15)

  }
});

//make this component available to the app
export default SearchFriend;
