import {View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../../constants/imagePath';
import {width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import styles from '../Home/Homestyle';
import HeaderComp from '../../Components/HeaderComp';
import VideoComponent from '../../Components/VideoComponent';

const Home = ({navigation}) => {
  console.log('HOMEPAGE');
  return (
    // <WrapperContainer>
    <View style={{flex: 1, marginTop: 20}}>
      {/* marginTop:50 */}
      <View style={{padding: 10}}>
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
              // tintColor={colors.darkgreen}
            />
            <View style={{marginLeft: 20}}>
              <Image
                source={imagePath.inactive_message}
                style={{height: 22, width: 25}}
                // tintColor={colors.darkgreen}
              />
            </View>
          </View>
        </View>
      </View>
      <VideoComponent navigation={navigation} 
      />
    </View>
    // </WrapperContainer>
  );
};
export default Home;
