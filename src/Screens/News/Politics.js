import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import fontFamily from '../../styles/fontFamily'

const Politics = () => {
  const politicalnews = [
    {
      src: require('../../assets/images/politics.webp'),
      text: "In her first poll battle, Bansuri Swaraj underlines this message"
    },
    {
      src: require('../../assets/images/leaderimage.webp'),
      text: "In her first poll battle, Bansuri Swaraj underlines this message"
    },
    {
      src: require('../../assets/images/politics.webp'),
      text: "In her first poll battle, Bansuri Swaraj underlines this message"
    },
    {
      src: require('../../assets/images/leaderimage.webp'),
      text: "In her first poll battle, Bansuri Swaraj underlines this message"
    },
  ]
  const renderItem =({item}) =>(
    <View style={{flexDirection:'row'}}>
      <Image source={item.src} style={{height:100,width:100,
      margin:10}}/>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
      data={politicalnews}
      renderItem={renderItem}/>
      <Text>Politics</Text>
    </View>
  )
}

export default Politics
const styles = StyleSheet.create({
  text:{
    fontFamily:fontFamily.bold,
    alignSelf:'center'
  }
})