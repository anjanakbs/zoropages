import React, {useRef, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import Video from 'react-native-video';
import {height, width} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const videosData = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '2',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    duration: '12:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Blender Inc.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '3',
    title: 'For Bigger Blazes',
    thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '4',
    title: 'For Bigger Escape',
    thumbnailUrl:
      'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    subscriber: '25254545 Subscribers',
    isLive: false,
  },
  {
    id: '5',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '6',
    title: 'For Bigger Blazes',
    thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: false,
  },
  {
    id: '7',
    title: 'For Bigger Escape',
    thumbnailUrl:
      'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '8',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    duration: '12:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Blender Inc.',
    videoUrl:
      'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: false,
  },
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
        source={{uri: item.videoUrl}}
        style={styles.video}
        paused={visibleVideoId !== item.id}
        resizeMode="cover"
        repeat={true}
      />
      <Image source={item.src} style={{marginTop: 10}} />
      {/* <Text>{item.title}</Text> */}
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
    height: height / 1.2,
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
