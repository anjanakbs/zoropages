import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import imagePath from '../../constants/imagePath'

const TagPost = () => {
  const[post, setPpost]=useState([
    { src: require('../../assets/images/profileimage2.jpg')},
    { src: require('../../assets/images/profileimage3.jpg')},
    { src: require('../../assets/images/modal.png')},
    { src: require('../../assets/images/profileimage.jpg')},
    { src: require('../../assets/images/profileimage2.jpg')},
    { src: require('../../assets/images/profileimage3.jpg')},
  ])
  const renderItem = ({item}) => (
    console.log('hlo', item.src),
    <View style={{width:136,height:130,margin:2}}>
      <Image source={item.src} style={{
        height:130,
        width:136,
        resizeMode:'cover',
      }}/>
      <Text>{item.text}</Text>
    </View>
  )
  return (
    <View style={{ flex: 1,}}>
       <FlatList
        data={post}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        numColumns='3'
      />
    </View>
  )
}

export default TagPost;