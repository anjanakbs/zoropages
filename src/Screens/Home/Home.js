import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import {height, textScale, width} from '../../styles/responsiveSize';
import List from './Stories';
import Stories from './Stories';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import fontFamily from '../../styles/fontFamily';
import styles from '../Home/Homestyle';
import HeaderComp from '../../Components/HeaderComp';
import HomeCard from '../../Components/HomeCard';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={styles.mainView}>
        <TextInputWithLabel
          placeholder={strings.search}
          placeholderTextColor={colors.black}
          lefticon={imagePath.Searchicon}
          extraStyle={{
            paddingLeft: 20,
            width: width / 2,
          }}
        />
        <View style={styles.image}>
          <Image source={imagePath.Cameraicon} />
        </View>
      </View>
      <View>
        <Stories horizontal navigation={navigation} />
      </View>
      <ScrollView>
        <HomeCard />
        <View>
          <Image source={imagePath.lastpost} style={styles.lastpost} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
