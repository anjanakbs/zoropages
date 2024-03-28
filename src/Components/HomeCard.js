import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import WrapperContainer from './WrapperContainer';
import imagePath from '../constants/imagePath';
import {textScale} from '../styles/responsiveSize';
import styles from '../Screens/Home/Homestyle';

const HomeCard = ({viewstyle = {}}) => {
  return (
    <View style={{...viewstyle}}>
      <View>
        <ImageBackground
          source={imagePath.Post}
          resizeMode="cover"
          style={styles.imagebackground}>
          <View style={styles.imageview}>
            <Image source={imagePath.Miranda} />
            <View style={{marginTop: 20}}>
              <Text style={{color: 'white'}}>Michael</Text>
              <Text style={{color: 'white'}}>2 hours</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.comment}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.relax}>#relax, </Text>
            <Text style={styles.travel}>#travel</Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={{fontSize: textScale(14)}}>
              Coventry is a city with a thousands year of history that
            </Text>
            <Text style={{fontSize: textScale(14)}}>
              has plenty to offer the visiting tourist, located in the
            </Text>
            <Text style={{fontSize: textScale(14)}}>
              heart of warmwickey, which is well-known as
            </Text>
            <Text style={{fontSize: textScale(14)}}>Shakespeare's country</Text>
          </View>
          <View style={styles.likeview}>
            <Image source={imagePath.Like} style={styles.likeimage} />
            <Image source={imagePath.comment} style={styles.likeimage} />
            <Image source={imagePath.share} style={styles.likeimage} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeCard;
