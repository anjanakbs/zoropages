import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import {textScale, width} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
const VideoComponent = () => {
  const [video, setvideo] = useState([
    {src: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <View style={styles.videoview}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={imagePath.Marry} />
        </TouchableOpacity>
        <View style={{marginTop: 7, paddingLeft: 5}}>
          <Text style={{color: 'black'}}>Michael</Text>
          <Text style={{color: 'black'}}>2 hours</Text>
        </View>
        <View style={{marginLeft: width / 3, flexDirection: 'row'}}>
          <Text style={styles.follow}>Follow</Text>
        </View>
      </View>
      <Video
        source={{uri: item.src}}
        style={styles.Video}
        controls
        resizeMode={'cover'}
      />
    </View>
  );
  return (
    <View style={styles.mainview}>
      <FlatList
        data={video}
        renderItem={renderItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default VideoComponent;
const styles = StyleSheet.create({
  Video: {
    width: width / 1.1,
    height: 400,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  mainview: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    marginTop: 10,
  },
  videoview: {
    flexDirection: 'row',
    marginTop: 30,
  },
  follow: {
    fontSize: textScale(18),
    marginTop: 15,
    marginRight: 25,
    textAlign: 'center',
    fontSize: textScale(14),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.lightgrey,
    height: 30,
    width: 90,
    paddingTop: 5,
    color: colors.black,
    backgroundColor: colors.lightgrey,
  },
});

/* <Video
        source={{
          uri: '/Users/jasneetkaur/Documents/Projects/zoropages/src/assets/images/video.mp4',
        }}
        style={styles.Video}
        controls
        resizeMode={'cover'}
      /> */
/* <Video
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{width: 300, height: 300}}
      /> */
/* <Video
        source={{
          uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        style={styles.Video}
        controls={true}
        resizeMode={'cover'}
      />  */
