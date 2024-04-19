import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../../constants/imagePath';
import {width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import styles from '../Home/Homestyle';
import HeaderComp from '../../Components/HeaderComp';
import VideoComponent from '../../Components/VideoComponent';

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,}}> 
        <VideoComponent navigation={navigation}/>
      </View>
  );
};
export default Home;
