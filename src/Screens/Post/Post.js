//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Storycomponent from '../../Components/Storycomponent';
import SearchList from '../SearchFriend/SearchList';
import Message from '../Post/Message';

// create a component
const Post = () => {
  return (
    <WrapperContainer>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <HeaderComp leftIcon={imagePath.backicon} />
        <Image source={imagePath.Plus} />
      </View>
      <View style={styles.container}>
        <Storycomponent />
      </View>
      <View>
        <Message />
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Post;
