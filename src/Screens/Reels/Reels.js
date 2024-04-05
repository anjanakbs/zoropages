import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import Video from 'react-native-video';
import { height, width } from '../../styles/responsiveSize';

const Reels = ({navigation,route}) => {
    console.log(route,'hlo')
//   const [Videos, setVideos] = useState([
//     {
//         Videourl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//     },
//     {
//         Videourl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       },
//       {
//         Videourl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//       },
//   ]);
//   const renderItem = ({item}) => (
//     <View style={{marginBottom:10}}>
//         <Video
//          source={{uri: item.Videourl}}
//          style={styles.videourlstyle}
//          repeat={true}
//          resizeMode={'cover'}
//          />
//     </View>
//   )
  return (
    <WrapperContainer>
    <View style={{flex:1}}>
      <HeaderComp leftIcon={imagePath.backicon} />
        {/* <FlatList
        data={Videos}
        renderItem={renderItem}
        /> */}
        <Video 
        source={{uri:route.params.videoUrl}}
        style={styles.videourlstyle}/>
      </View>
     
     </WrapperContainer>
  );
};

export default Reels;
const styles = StyleSheet.create({
    videourlstyle:{
        height:height,
        width:width,
        // resizeMode:'center'
    }
})
