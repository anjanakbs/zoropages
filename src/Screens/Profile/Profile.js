//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import {moderateScale, textScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import HomeCard from '../../Components/HomeCard';
import fontFamily from '../../styles/fontFamily';

const Profile = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={{marginLeft: width - 60}}>
        <Text style={styles.edittext}>Edit</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={imagePath.Marry} />
        <View style={{alignSelf:'center',paddingLeft:5}}>
          <Text>#relax</Text>
          <Text>#travel</Text>
        </View>
      </View>
      <View style={styles.followlist}>
        <Text>128 Posts</Text>
        <Text onPress={() => navigation.navigate('Following')}>
          800 Follower
        </Text>
        <Text>100 Following</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.posticon}>
        <Image source={imagePath.posticon}/>
        <Image source={imagePath.photo}/>
        <Image source={imagePath.Reels}style={{height:30,width:30}}/>
      </View>
      <ScrollView>
        <View>
          <HomeCard viewstyle={{marginTop: 20}} />
          <HomeCard viewstyle={{marginTop: 20}} />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};
export default Profile;

const styles = StyleSheet.create({
  postview: {
    marginTop: 8,
    backgroundColor: colors.lightgrey,
  },
  image: {
    flexDirection: 'row',
  },
  imageview: {
    flexDirection: 'row',
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  followlist: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    marginTop: 7,
  },
  posticon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  likeimage: {
    height: 30,
    width: 30,
    tintColor: colors.theme,
  },
  likeview: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  edittext: {
    fontFamily: fontFamily.medium,
    fontSize: moderateScale(15),
  },
});
