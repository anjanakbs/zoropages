import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import fontFamily from '../../styles/fontFamily'

const scienceTechnology = () => {
  const news = [
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
    {
      src: require('../../assets/images/newsimage.webp'),
      text: 'Indian-origin astronaut Sunita Williams set for third space mission'
    },
  ]
  const renderItem =({item}) =>(
    <View style={{flexDirection:'row'}}>
      <Image source={item.src}style={{height:100,width:100,margin:10}}/>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  return (
    <View style={{flex:1}}>
      {/* <FlatList/> */}
      <FlashList 
      data={news}
      renderItem={renderItem}
      />
      <Text>scienceTechnology</Text>
    </View>
  )
}

export default scienceTechnology
const styles = StyleSheet.create({
  text:{
    fontFamily:fontFamily.bold,
    alignSelf:'center'
  }
})