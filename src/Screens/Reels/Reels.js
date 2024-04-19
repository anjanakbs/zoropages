import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import { height, textScale, width } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheetComp from '../../Components/BottomSheetComp';
import styles from './ReelsStyle';
import CommentbottomsheetComp from '../../Components/CommentbottomsheetComp';

const Reels = ({ navigation, route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isCommentVisible, setisCommentVisible] = useState(false)
  

  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };
  const [visibleVideoId, setVisibleVideoId] = useState(null);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 3) {
      setVisibleVideoId(viewableItems[0].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const data = [
    {
      id: 1,
      videoUrl:
        'https://videos.pexels.com/video-files/4434150/4434150-sd_540_960_30fps.mp4',
        Follow: 'Follow',
      type: 3
    },
    {
      id: 2,
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        Follow: 'Follow',
      type: 3
    },
    {
      id: 3,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        Follow: 'Follow',
      type: 3
    },
    {
      id: 4,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        Follow: 'Follow',
      type: 3
    },
  ];
  const snapPoints = useMemo(() => ['25%', '50%',], []);


  const renderItem = ({ item }) => (
    <View style={styles.overallview}>
      <View style={styles.mainView}>
        <View style={{ flexDirection: 'row', margin: 5,}}>
          <Image source={imagePath.Marry} />
          <View style={{ marginTop: 10, paddingLeft: 12,}}>
            <Text style={styles.textstyle}>Entertainment Hub  </Text>
            <Text style={styles.textstyle}>1 hours</Text>
          </View>
        </View>
        <Text style={styles.Follow}>{item.Follow}</Text>
        <TouchableOpacity onPress={() => setIsBottomSheetVisible(!isBottomSheetVisible)}>
          <Image
            source={imagePath.menu}
            style={{ height: 20, width: 20, marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: route.params.videoUrl }}
      //  source={{ uri: item.videoUrl }}
        style={styles.video}
        paused={visibleVideoId !== item.id}
        muted={visibleVideoId != item.id}
        volume={isPlaying ? 1.0 : 0.4}
        resizeMode="cover"
        repeat={true}
      />
      <View style={{ flexDirection: 'row',marginBottom:10,justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Image source={imagePath.Like2} style={styles.iconstyle} />
        <Text style={styles.icontext}>100k</Text>
        <TouchableOpacity onPress={() => setisCommentVisible(!isCommentVisible)}>
        <Image source={imagePath.comment3} style={styles.iconstyle} />
        </TouchableOpacity>
        <Text style={styles.icontext}>200</Text>
        </View>
        <View style={{flexDirection:'row',}}>
      <Image source={imagePath.share5} style={styles.iconstyle} />
        <Text style={styles.icontext}>100</Text>
        <Image source={imagePath.repost3} style={styles.saveicon}/>
        <Text style={styles.icontext}>2</Text>
        </View>
      </View>
      </View>
  );
  return (
    // <WrapperContainer>
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor:'white'
      }}>
      <HeaderComp leftIcon={imagePath.backicon} containerstyle={{ marginLeft: 5,backgroundColor:'white'}} />
      <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        viewablePercentThreshold={100}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      {
        isBottomSheetVisible && <BottomSheetComp snapPoints={['25%', '50%', '100%', '150%']} />
      }
      {
        isCommentVisible && <CommentbottomsheetComp commentsnapPoints={['25%', '50%', '100%', '150%']} />
      }
    </SafeAreaView >
    // </WrapperContainer>
  );
};
export default Reels;



// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import WrapperContainer from '../../Components/WrapperContainer';
// import HeaderComp from '../../Components/HeaderComp';
// import imagePath from '../../constants/imagePath';
// import Video from 'react-native-video';
// import {height, textScale, width} from '../../styles/responsiveSize';
// import colors from '../../styles/colors';
// import fontFamily from '../../styles/fontFamily';

// const Reels = ({navigation, route}) => {
//   const videoRef = useRef(null);
//   const [paused, setPaused] = useState(true);

//   const togglePlayPause = () => {
//     setPaused(!paused);
//   };

//   return (
//     <WrapperContainer>
//       <View style={{flex: 1, zIndex: 1}}>
//         <View style={{flexDirection: 'row'}}>
//           <HeaderComp leftIcon={imagePath.backicon} />
//           <Text style={styles.heading}>Videos</Text>
//         </View>
//         <Video
//           ref={videoRef}
//           source={{uri: route.params.videoUrl}}
//           style={styles.videourlstyle}
//           repeat={true}
//           paused={paused}
//         />
//         <Button title={paused ? 'play' : 'Pause'} onPress={togglePlayPause} />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//           marginBottom: 10,
//         }}>
//         <Image source={imagePath.Like2} style={{height: 30, width: 30}} />
//         <Image source={imagePath.comment3} style={{height: 30, width: 30}} />
//         <Image source={imagePath.share4} style={{height: 30, width: 30}} />
//         <Image source={imagePath.Save} style={{height: 30, width: 30}} />
//       </View>
//     </WrapperContainer>
//   );
// };
// export default Reels;
// const styles = StyleSheet.create({
//   videourlstyle: {
//     height: 500,
//     width: width / 1.1 + 20,
//   },
//   heading: {
//     fontSize: textScale(20),
//     fontFamily: fontFamily.bold,
//     marginTop: 8,
//     marginLeft: 30,
//   },
// });
