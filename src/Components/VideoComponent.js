import {View,StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import {width} from '../styles/responsiveSize';
import colors from '../styles/colors';
const VideoComponent = () => {
  const [video, setvideo] = useState([
    {src: require('../assets/images/backgroundvideo.mp4')},
    {src: require('../assets/images/video.mp4')},
    {src: require('../assets/images/backgroundvideo.mp4')},
    {src: require('../assets/images/video.mp4')},
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <Video
        source={item.src}
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
    width: width/1.1,
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    borderRadius:10
  },
  mainview:{
    backgroundColor:colors.white,
    borderRadius:20,
    borderWidth:1,
    borderColor:colors.white,
    marginTop:10
  }
});


  /* <Video
        source={{
          uri: '/Users/jasneetkaur/Documents/Projects/zoropages/src/assets/images/video.mp4',
        }}
        style={styles.Video}
        controls
        resizeMode={'cover'}
      /> */

