import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import {textScale, width} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
const VideoComponent = () => {
  const[isFocus, setIsFocus]=useState(false)
  const handleFocus = () =>{
    setIsFocus(true);
  };
  const handleBlur = () =>{
    setIsFocus(false);
  };
  const [isPaused, setIsPaused]= useState(false);
  const togglePause =() =>{
    setIsPaused(!isPaused)
  }
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
    <View style={{flex: 1,backgroundColor:colors.black}}>
      <View style={styles.videoview}>
          <Image source={imagePath.Marry} />
        <View style={{marginTop: 7, paddingLeft: 5}}>
          <Text style={{color:colors.white}}>Michael</Text>
          <Text style={{color: colors.white}}>2 hours</Text>
        </View>
        <View style={{marginLeft: width /3.5, flexDirection: 'row'}}>
          <Text style={styles.follow}>Follow</Text>
          <Image
                source={imagePath.menu}
                style={{height: 22, width: 15, marginTop: 13,}}
                tintColor={colors.grey}
              />
        </View>
      </View>
     
      {isFocus &&(
      <Video
        source={{uri: item.src}}
        style={styles.Video}
        resizeMode={'cover'}
        repeat={true} 
        muted={true}
        // controls={true}
        paused = {isPaused}
      />)}
      {/* <Button title={isPaused ? 'play':'pause'}
      onPress={togglePause}/> */}
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
       <Button title='Focus' onPress={handleFocus}/>
      <Button title='Blur' onPress={handleBlur}/>
    </View>
  );
};
export default VideoComponent;
const styles = StyleSheet.create({
  Video: {
    width: width /1.1,
    height: 600,
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
    marginTop: 15,
    position:'absolute',
    top:1,
    left:15,
    zIndex:1
  },
  follow: {
    fontSize: textScale(18),
    marginRight:10,
    marginTop: 10,
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
