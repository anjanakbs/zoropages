//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Stories from '../Home/Stories';
import Request from './Request';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';

const Notification = () => {
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
      <View>
        <Request styling={{}} />
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({});

export default Notification;
