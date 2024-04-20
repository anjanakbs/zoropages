import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'

const MyPost = () => {
  const data = [
    { src: require('../../assets/images/Dog.png') },
    { src: require('../../assets/images/Dog.png') },
    { src: require('../../assets/images/Dog.png') },
  ]
  const renderItem = (item) => {
    console.log('hlo', item);
    <View style={{ flex: 1, }}>
      <Image source={item.src}
        style={{
          height: 100,
          width: 100,
        }} />
    </View>
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal={false}
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      <Image source={imagePath.Dog} style={{ height: 100, width: 100 }} />
      <Image source={imagePath.modal} style={{ height: 100, width: 100 }} />
      <Image source={imagePath.profileiamge} style={{ height: 100, width: 100 }} />
      <Image source={imagePath.latest} style={{ height: 100, width: 100 }} />
    </View>
  )
}

export default MyPost