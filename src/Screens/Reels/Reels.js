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

const Reels = ({ navigation, route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  // const BottomSheetComp = () => {
  //   setIsBottomSheetVisible(true);
  // };
  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };
  const [visibleVideoId, setVisibleVideoId] = useState(null);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 3) {
      setVisibleVideoId(viewableItems[1].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const data = [
    {
      id: 1,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 3
    },
    {
      id: 2,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 3
    },
    {
      id: 3,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 3
    },
    {
      id: 4,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 3
    },
  ];
  const bottomSheetRef = useRef < BottomSheet > (null);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  const renderItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>

      <View style={styles.mainView}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={imagePath.Marry} />
          <View style={{ marginTop: 10, paddingLeft: 12 }}>
            <Text style={styles.textstyle}>Entertainment Hub</Text>
            <Text style={styles.textstyle}>Nov18,2023</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsBottomSheetVisible(!isBottomSheetVisible)}>
        <Image
          source={imagePath.menu}
          style={{ height: 20, width: 20, marginTop: 20 }}
        />
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: route.params.videoUrl }}
        style={styles.video}
        paused={visibleVideoId !== item.id}
        muted={visibleVideoId != item.id}
        volume={isPlaying ? 1.0 : 0.4}
        resizeMode="cover"
        repeat={true} 
      />
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>


        <Image
          source={imagePath.Like}
          style={{ height: 20, width: 20, marginLeft: 10, marginTop: 5 }}
          tintColor={colors.theme}
        />

        <Image
          source={imagePath.smile}
          style={{ height: 20, width: 20, marginTop: 5 }}
        />
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
          }}>{`${'246k'}    ${'321 Comments'}    ${'Shares 6M views'}`}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
          <Image source={imagePath.Like2} style={styles.iconstyle} />
        <Text style={styles.icontext}>Like</Text>
        <Image source={imagePath.comment3} style={styles.iconstyle} />
        <Text style={styles.icontext}>Comment</Text>
        <Image source={imagePath.share5} style={styles.iconstyle} />
        <Text style={styles.icontext}>Share</Text>
        <Image source={imagePath.Save} style={styles.iconstyle} />
        <Text style={styles.icontext}>Save</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.headerstyle}>
        <HeaderComp leftIcon={imagePath.backicon} containerstyle={{ marginLeft: 10, tintColor: colors.white }} tintColor={colors.white} />
        <Text style={styles.heading}>Video</Text>
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
          <Image source={imagePath.inactive_profile} style={{ marginTop: 10, }} tintColor={colors.white} />
          <Image source={imagePath.search2} style={{ marginTop: 10, marginLeft: 10, height: 21, width: 21 }} tintColor={colors.white} />
        </View>
      </View>
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
        isBottomSheetVisible && <BottomSheetComp />
      }
    </SafeAreaView >
  );
};
export default Reels;
const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 1.3,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textstyle: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
  iconstyle: {
    height: 25,
    width: 25,
    marginTop: 5,
    marginHorizontal: 10
  },
  icontext: {
    marginTop: 7,
    paddingLeft: 5,
    fontFamily: fontFamily.medium,
  },
  heading: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(15),
    marginTop: 10,
    color: colors.white
  },
  headerstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: colors.black
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20
  }

});
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
