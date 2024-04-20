import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import imagePath from '../../constants/imagePath'

const MyReels = () => {
  const videos =[
    {videourl:require('../../assets/images/video.mp4')},
    {videourl:require('../../assets/images/video.mp4')},
    {videourl:require('../../assets/images/video.mp4')},
  ]
  const renderItem =(item)=>{
    console.log('hello',item);
  <View style={{flex:1}}>
    <Video Source={{uri:item.videourl}}/>
  </View>
  }
  return (
    <View>
      <Text>MyReels</Text>
      <Video Source={imagePath.video1}/>
      <FlatList 
      horizontal={true}
      data={videos}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MyReels