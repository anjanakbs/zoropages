import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import SearchList from './SearchList';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';

const Search = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={styles.container}>
        <Text style={styles.textstyle}>Search</Text>
      </View>
      <View style={styles.inputstyle}>
        <TextInputWithLabel
          placeholder={strings.search}
          placeholderTextColor={colors.black}
          lefticon={imagePath.Searchicon}
          extraStyle={{paddingLeft: 20, width: width / 1.3}}
        />
      </View>
      <View style={styles.viewline}></View>
      <View style={styles.recent}>
        <Text style={styles.rsearch}>Recent Search</Text>
        <Text style={styles.clearall}>Clear All</Text>
      </View>
      <View>
        <SearchList navigation={navigation} />
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
    alignItems: 'center',
  },
  viewline: {
    backgroundColor: colors.grey,
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
  clearall: {
    color: colors.theme,
    fontFamily: fontFamily.medium,
    fontSize: textScale(20),
  },
  rsearch: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(20),
  },
});

//make this component available to the app
export default Search;
