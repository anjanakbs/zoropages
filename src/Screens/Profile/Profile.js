//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import SearchList from '../SearchFriend/SearchList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchFriend from '../SearchFriend/SearchFriend';
import Reels from '../Reels/Reels';
import MyPost from './MyPost';
import MyReels from './MyReels';
import TagPost from './TagPost';

const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  return (
    // <WrapperContainer>
    <View style={{flex:1}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
      </View>
      <View style={{  alignSelf: 'center', marginTop: 10 }}>
        <Image source={imagePath.modal} style={styles.Profile} />
        <Text style={styles.Profilename}>Marry Leis</Text>
        {/* <View style={{ alignSelf: 'center', paddingLeft: 5 }}>
        </View> */}
      </View>
      <View style={styles.followlist}>
        <Text style={styles.text}>128 Posts</Text>
        <Text onPress={() => navigation.navigate('MaterialTopTab')} style={styles.text}>
          800 Follower
        </Text>
        <Text onPress={() => navigation.navigate('MaterialTopTab')} style={styles.text}>100 Following</Text>
      </View>
      <View style={styles.editbuttonview}>
        <TouchableOpacity style={styles.editbutton}>
          <Text style={styles.edittext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editbutton}>
          <Text style={styles.edittext}>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={imagePath.add} style={styles.addprofile}/>
        </TouchableOpacity>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Post" component={MyPost}/>
        <Tab.Screen name="Reels" component={MyReels}/>
        <Tab.Screen name="Tag" component={TagPost}/>
      </Tab.Navigator>
      </View>
    // </WrapperContainer>
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
  editbutton: {
    backgroundColor: colors.lightgrey,
    height: 35,
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  edittext: {
    fontFamily: fontFamily.bold
  },
  editbuttonview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 20
  },
  Profile: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  text: {
    fontSize: textScale(15),
    fontFamily: fontFamily.bold
  },
  Profilename: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(20),
  },
  addprofile:{
    height:25,
    width:25
  }
});
