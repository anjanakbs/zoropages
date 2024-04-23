import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import imagePath from '../../constants/imagePath'
import { height, width } from '../../styles/responsiveSize'

const MyReels = () => {
  const videodata = [
    {
      id: 1,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      Follow: 'Follow',
      type: 1
    },
    {
      id: 2,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      Follow: 'Follow',
      type: 1
    },
    {
      id: 2,
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      Follow: 'Follow',
      type: 1
    },
  ]
  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <Video source={{uri:item.videoUrl}}
      style={styles.reels}
        resizeMode="cover"
      />
    </View>
  )
  return (
    <View style={{flex:1}}>
      <Text>MyReels</Text>
      {/* <Video Source={require('../../assets/images/video.mp4')}
      style={{height:100,width:100,backgroundColor:'red'}}/> */}
      <FlatList
        horizontal={true}
        data={videodata}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MyReels

const styles = StyleSheet.create({
  reels:{
    height:300,
    width:150,
    margin:2
    // backgroundColor:'black'
  }
})