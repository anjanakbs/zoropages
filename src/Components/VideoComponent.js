import React, {useRef, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import Video from 'react-native-video';
import {height, width} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const videosData = [
  {id: 0, url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {id: 1, url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {id: 2, src: require('../assets/images/Dog.png')},
  {id: 3, url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {id: 4, url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
  {id: 5, url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
];
const VideoComponent = () => {
  const [visibleVideoId, setVisibleVideoId] = useState(null);
  const flatListRef = useRef(null);

  const handleViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 0) {
      setVisibleVideoId(viewableItems[0].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const renderItem = ({item, index, seprator}) => (
    <View style={styles.videoContainer}>
      <View style={styles.videoview}>
        <Image source={imagePath.Marry} />
        <View style={{marginTop: 7, paddingLeft: 5}}>
          <Text style={{color: colors.black}}>Michael</Text>
          <Text style={{color: colors.black}}>2 hours</Text>
        </View>

        <View
          style={{
            marginLeft: width / 2.3,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={styles.follow}>Follow</Text>
          <Image
            source={imagePath.menu}
            style={{height: 22, width: 15, marginLeft: 10}}
            tintColor={colors.grey}
          />
        </View>
      </View>

      <Video
        source={{uri: item.url}}
        style={styles.video}
        paused={visibleVideoId !== item.id}
        resizeMode="cover"
        repeat={true}
      />
      <Image source={item.src} style={{marginTop: 10}} />
    </View>
  );
  return (
    <FlatList
      ref={flatListRef}
      style={styles.container}
      data={videosData}
      renderItem={renderItem}
      pagingEnabled
      viewablePercentThreshold={100}
      onViewableItemsChanged={handleViewableItemsChanged}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  video: {
    width: 500,
    height: height / 1.7,
    marginTop: 10,
  },
  videoview: {
    flexDirection: 'row',
    marginTop: 15,
    position: 'absolute',
    top: 1,
    left: 11,
    zIndex: 1,
  },
});
export default VideoComponent;
// import {
//   View,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   Text,
//   Button,
// } from 'react-native';
// import React, {useState} from 'react';
// import Video from 'react-native-video';
// import {textScale, width} from '../styles/responsiveSize';
// import colors from '../styles/colors';
// import imagePath from '../constants/imagePath';
// import LinearGradient from 'react-native-linear-gradient';
// const VideoComponent = () => {
//   const[isFocus, setIsFocus]=useState(false)
//   const handleFocus = () =>{
//     setIsFocus(true);
//   };
//   const handleBlur = () =>{
//     setIsFocus(false);
//   };
//   const [isPaused, setIsPaused]= useState(false);
//   const togglePause =() =>{
//     setIsPaused(!isPaused)
//   }
//   const [video, setvideo] = useState([
//     {src: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},
//     {
//       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//     },
//     {
//       src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//     },
//   ]);
//   const renderItem = ({item, index, seprator}) => (
//     <View style={{flex: 1,backgroundColor:colors.black}}>
//       <View style={styles.videoview}>
//           <Image source={imagePath.Marry} />
//         <View style={{marginTop: 7, paddingLeft: 5}}>
//           <Text style={{color:colors.white}}>Michael</Text>
//           <Text style={{color: colors.white}}>2 hours</Text>
//         </View>
//         <View style={{marginLeft: width /3.5, flexDirection: 'row'}}>
//           <Text style={styles.follow}>Follow</Text>
//           <Image
//                 source={imagePath.menu}
//                 style={{height: 22, width: 15, marginTop: 13,}}
//                 tintColor={colors.grey}
//               />
//         </View>
//       </View>

//       {isFocus &&(
//       <Video
//         source={{uri: item.src}}
//         style={styles.Video}
//         resizeMode={'cover'}
//         repeat={true}
//         muted={true}
//         // controls={true}
//         paused = {isPaused}
//       />)}
//       {/* <Button title={isPaused ? 'play':'pause'}
//       onPress={togglePause}/> */}
//     </View>
//   );
//   return (
//     <View style={styles.mainview}>
//       <FlatList
//         data={video}
//         renderItem={renderItem}
//         horizontal={false}
//         showsHorizontalScrollIndicator={false}
//       />
//        <Button title='Focus' onPress={handleFocus}/>
//       <Button title='Blur' onPress={handleBlur}/>
//     </View>
//   );
// };
// export default VideoComponent;
// const styles = StyleSheet.create({
//   Video: {
//     width: width /1.1,
//     height: 600,
//     marginTop: 10,
//     marginLeft: 10,
//     borderRadius: 10,
//   },
//   mainview: {
//     backgroundColor: colors.white,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: colors.white,
//     marginTop: 10,
//   },
//   videoview: {
//     flexDirection: 'row',
//     marginTop: 15,
//     position:'absolute',
//     top:1,
//     left:15,
//     zIndex:1
//   },
//   follow: {
//     fontSize: textScale(18),
//     marginRight:10,
//     marginTop: 10,
//     textAlign: 'center',
//     fontSize: textScale(14),
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: colors.lightgrey,
//     height: 30,
//     width: 90,
//     paddingTop: 5,
//     color: colors.black,
//     backgroundColor: colors.lightgrey,
//   },
// });

// /* <Video
//         source={{
//           uri: '/Users/jasneetkaur/Documents/Projects/zoropages/src/assets/images/video.mp4',
//         }}
//         style={styles.Video}
//         controls
//         resizeMode={'cover'}
//       /> */
// /* <Video
//         source={{
//           uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//         }}
//         rate={1.0}
//         volume={1.0}
//         muted={false}
//         resizeMode="cover"
//         shouldPlay
//         isLooping
//         style={{width: 300, height: 300}}
//       /> */
// /* <Video
//         source={{
//           uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//         }}
//         style={styles.Video}
//         controls={true}
//         resizeMode={'cover'}
//       />  */
