import React, {useRef, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {height, textScale, width} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const Reels = ({navigation, route}) => {
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };
  const data = [
    {
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row'}}>
          <Image source={imagePath.Marry} />
          <View style={{marginTop: 10, paddingLeft: 12}}>
            <Text style={styles.textstyle}>Entertainment Hub</Text>
            <Text style={styles.textstyle}>Nov18,2023</Text>
          </View>
        </View>
        <Image
          source={imagePath.menu}
          style={{height: 20, width: 20, marginTop: 20}}
        />
      </View>
      <Video
        source={{uri: route.params.videoUrl}}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        repeat={true}
      />
      <View style={{flexDirection: 'row',marginTop:5,marginBottom:5}}>
        <Image
          source={imagePath.Like}
          style={{height: 20, width: 20, marginLeft: 10, marginTop: 5}}
          tintColor={colors.theme}
        />
        <Image
          source={imagePath.smile}
          style={{height: 20, width: 20, marginTop: 5}}
        />
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
          }}>{`${'246k'}    ${'321 Comments'}    ${'Shares 6M views'}`}</Text>
      </View>
      <View style={styles.iconview}>
        <View style={styles.icontextview}>
          <Image source={imagePath.Like2} style={styles.iconstyle} />
          <Text style={styles.icontext}>Like</Text>
        </View>
        <View style={styles.icontextview}>
          <Image source={imagePath.comment3} style={styles.iconstyle} />
          <Text style={styles.icontext}>Comment</Text>
        </View>
        <View style={styles.icontextview}>
          <Image source={imagePath.share5} style={styles.iconstyle} />
          <Text style={styles.icontext}>Share</Text>
        </View>
        <View style={styles.icontextview}>
          <Image source={imagePath.Save} style={styles.iconstyle} />
          <Text style={styles.icontext}>Save</Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default Reels;
const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 1.5,
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
    marginBottom: 5,
  },
  iconview: {flexDirection: 'row'},
  icontext: {
    marginTop: 7,
    paddingLeft: 5,
    fontFamily: fontFamily.medium,
  },
  icontextview: {
    marginHorizontal: 15,
    flexDirection: 'row',
  },
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
