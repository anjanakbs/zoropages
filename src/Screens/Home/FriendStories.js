import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Storycomponent from '../../Components/Storycomponent';
import HomeCard from '../../Components/HomeCard';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import FlatImage from './FlatImage';

const FriendStories = ({navigation}) => {
  const goToScreen = screen => {
    navigation.navigate(screen);
  };
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View>
        <Storycomponent />
      </View>
      <View style={styles.headingview}>
        <Text style={styles.heading}>Latest</Text>
      </View>
      <ScrollView>
        <View>
          <FlatImage />
        </View>
        <View style={styles.view1}>
          <HomeCard />
        </View>
        <View style={styles.view2}>
          <HomeCard />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};
export default FriendStories;
const styles = StyleSheet.create({
  view1: {
    marginTop: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  heading: {
    fontSize: textScale(19),
  },
  headingview: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
});
