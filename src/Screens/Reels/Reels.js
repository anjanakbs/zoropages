import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Video from 'react-native-video';
import {height, textScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const Reels = ({navigation, route}) => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <WrapperContainer>
      <View style={{flex: 1, zIndex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <HeaderComp leftIcon={imagePath.backicon} />
          <Text style={styles.heading}>Videos</Text>
        </View>
        <Video
          ref={videoRef}
          source={{uri: route.params.videoUrl}}
          style={styles.videourlstyle}
          repeat={true}
          paused={paused}
        />
        <Button title={paused ? 'play' : 'Pause'} onPress={togglePlayPause} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 10,
        }}>
        <Image source={imagePath.Like2} style={{height: 30, width: 30}} />
        <Image source={imagePath.comment3} style={{height: 30, width: 30}} />
        <Image source={imagePath.share4} style={{height: 30, width: 30}} />
        <Image source={imagePath.Save} style={{height: 30, width: 30}} />
      </View>
    </WrapperContainer>
  );
};
export default Reels;
const styles = StyleSheet.create({
  videourlstyle: {
    height: 500,
    width: width / 1.1 + 20,
  },
  heading: {
    fontSize: textScale(20),
    fontFamily: fontFamily.bold,
    marginTop: 8,
    marginLeft: 30,
  },
});
