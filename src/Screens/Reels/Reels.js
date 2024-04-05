import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Video from 'react-native-video';
import { height, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const Reels = ({navigation,route}) => {
  return (
    <WrapperContainer>
    <View style={{flex:1,}}>
      <View style={{flexDirection:'row'}}>
      <HeaderComp leftIcon={imagePath.backicon} />
      <Text style={{fontSize:textScale(20),fontFamily:fontFamily.bold,marginTop:8,marginLeft:30}}>
        Videos</Text>
      </View>
        <Video 
        source={{uri:route.params.videoUrl}}
        style={styles.videourlstyle}/>
      </View>
     </WrapperContainer>
  );
};
export default Reels;
const styles = StyleSheet.create({
    videourlstyle:{
        height:800,
        width:width/1.1+20,
    }
})