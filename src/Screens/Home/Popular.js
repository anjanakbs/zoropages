import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import HeaderComp from '../../Components/HeaderComp';
import FlatImage from './Suggestimage';
import HomeCard from '../../Components/HomeCard';
import colors from '../../styles/colors';

const Popular = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <TextInputWithLabel
        placeholder="Search"
        lefticon={imagePath.Searchicon}
        extraStyle={{paddingLeft: 20}}
      />
      <View style={styles.view1}>
        <Text style={styles.heading}>What's News ?</Text>
        <Image source={imagePath.Jones} />
      </View>
      <View>
        <FlatImage />
      </View>
      <View>
        <View style={styles.view2}>
          <Image
            source={imagePath.Leis}
            style={{marginBottom: 10, marginTop: 10}}
          />
          <View style={styles.textview}>
            <Text>Miranda</Text>
            <Text>2 hours</Text>
          </View>
        </View>
        <HomeCard />
      </View>
    </WrapperContainer>
  );
};

export default Popular;
const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  heading: {
    fontSize: textScale(26),
  },
  view2: {
    flexDirection: 'row',
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
  },
  textview: {paddingLeft: 10},
});
