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
import fontFamily from '../../styles/fontFamily';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPost from './MyPost';
import MyReels from './MyReels';
import TagPost from './TagPost';
import HeaderComp from '../../Components/HeaderComp';

const Tab = createMaterialTopTabNavigator();
const Profile = ({ navigation }) => {
  return (
    // <WrapperContainer>
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <HeaderComp leftIcon={imagePath.backicon} containerstyle={{ marginLeft: 5 }} />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image source={imagePath.search2} style={{ height: 20, width: 20, }} />
          <Image source={imagePath.menu} style={{ height: 20, width: 20, marginRight: 10, marginLeft: 10 }} />
        </View>
      </View>
      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Image source={imagePath.modal} style={styles.Profile}/>
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.Profilename}>Marry Leis</Text>
          <Text>Live like today is your last day on earth</Text>
          {/* <Text>Marry Leis</Text> */}
        </View>
      </View>
      <View>
        {/* <Text style={{marginLeft:9}}>Born March 5,1999  Joined March 2024</Text> */}
      </View>
      <View style={styles.followlist}>
        <Text style={styles.text}>128 Posts</Text>
        <Text onPress={() => navigation.navigate('MaterialTopTab')} style={styles.text}>
          800 Follower
        </Text>
        <Text onPress={() => navigation.navigate('MaterialTopTab')} style={styles.text}>100 Following</Text>
      </View>
      <View style={styles.editbuttonview}>
        <TouchableOpacity style={styles.editbutton}onPress={()=>navigation.navigate('EditProfile')}>
          <Text style={styles.edittext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editbutton}>
          <Text style={styles.edittext}>Share Profile</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="MyPost" component={MyPost} />
        <Tab.Screen name="Reels" component={MyReels} />
        <Tab.Screen name="Tag" component={TagPost} />
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
    marginTop: 15,
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
    alignSelf: 'center'
  },
  addprofile: {
    height: 25,
    width: 25
  }
});
