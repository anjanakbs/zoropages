import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import WrapperContainer from './WrapperContainer';
import imagePath from '../constants/imagePath';
import {textScale, width} from '../styles/responsiveSize';
import styles from '../Screens/Home/Homestyle';
import colors from '../styles/colors';
import SlidePost from './SlidePost';

const HomeCard = ({
  navigation,
  viewstyle = {}
}) => {
  return (
    <View style={{...viewstyle}}>
      <View style={styles.view1}>
        <View style={styles.imageview}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Image source={imagePath.Marry} />
          </TouchableOpacity >
          <View style={{marginTop: 7, paddingLeft: 5}}>
            <Text style={{color: 'black'}}>Michael</Text>
            <Text style={{color: 'black'}}>2 hours</Text>
          </View>
          <View style={{marginLeft: width / 3.5, flexDirection: 'row',}}>
            <Text style={styles.follow}>Follow</Text>
            <TouchableOpacity >
            <Image
              source={imagePath.moreicon}
              style={{height: 22, width: 15, marginTop: 13,}}
            />
            </TouchableOpacity>
          </View>
        </View>
          <SlidePost/>
        <View style={styles.comment}>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Text style={styles.relax}>{`${'#relax'}, ${'#travel'}`} </Text>
          </View>
          <View style={{marginTop: 7}}>
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
            <Image
              source={imagePath.Like}
              style={styles.likeimage}
              tintColor={colors.darkgreen}
            />
            <Image
              source={imagePath.comment}
              style={styles.likeimage}
              tintColor={colors.darkgreen}
            />
            <Image
              source={imagePath.share5}
              style={styles.likeimage}
              tintColor={colors.darkgreen}
            />
            <View style={styles.saveimage}>
              <Image
                source={imagePath.Save}
                style={{height: 25, width: 25}}
                tintColor={colors.darkgreen}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={{fontSize: textScale(15)}}>10000 Likes</Text>
        </View>
        <Text style={{fontSize: textScale(15)}}>View all 3,027 comment</Text>
      </View>
    </View>
  );
};
export default HomeCard;
