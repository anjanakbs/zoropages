import {
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../../constants/imagePath';
import { width} from '../../styles/responsiveSize';
import Stories from './Stories';
import colors from '../../styles/colors';
import styles from '../Home/Homestyle';
import HeaderComp from '../../Components/HeaderComp';
import HomeCard from '../../Components/HomeCard';
import WrapperContainer from '../../Components/WrapperContainer';
import Suggestimage from './Suggestimage';
import VideoComponent from '../../Components/VideoComponent';

const Home = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={styles.mainView}>
        <Image
          source={imagePath.logo}
          style={{height: 35, width: 30, paddingLeft: width / 2.5}}
        />
        <View style={styles.image}>
          <Image
            source={imagePath.inactive_notification}
            style={{height: 22, width: 22}}
            tintColor={colors.darkgreen}
          />
          <View style={{marginLeft: 20,}}>
            <Image
              source={imagePath.inactive_message}
              style={{height: 22, width: 22}}
              tintColor={colors.darkgreen}
            />
          </View>
        </View>
      </View>
      <View>
        <Stories horizontal navigation={navigation} />
      </View>
      <ScrollView>
        <HomeCard  navigation={navigation} />
        <Suggestimage navigation={navigation}/>
        <VideoComponent />
      </ScrollView>
    </WrapperContainer>
  );
};
export default Home;