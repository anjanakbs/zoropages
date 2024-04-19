//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Storycomponent from '../../Components/Storycomponent';
import Message from '../Post/Message';

const Post = ({navigation}) => {
  return (
    <WrapperContainer>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <HeaderComp leftIcon={imagePath.backicon} />
        <Image source={imagePath.Plus}style={{marginTop:13}} />
      </View>
      <View style={styles.container}>
        <Storycomponent />
      </View>
      <View>
        <Message navigation={navigation}/>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Post;
