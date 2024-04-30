import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'

const Travel = () => {
  const travelimage = [
    {
      src: require('../../assets/images/travelimage.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
    {
      src: require('../../assets/images/travelimage2.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
    {
      src: require('../../assets/images/travelimage3.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
    {
      src: require('../../assets/images/travelimage4.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
    {
      src: require('../../assets/images/travelimage.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
    {
      src: require('../../assets/images/travelimage.jpg'),
      text: 'How to reach Leh-Ladakh? Tips to choose the right mode of travel'
    },
  ]
  const renderItem =({item}) =>(
    <View style={{flexDirection:'row'}}>
      <Image source={item.src} style={{height:100,width:100,margin:5}}/>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  return (
    <View>
      <FlatList 
      data={travelimage}
      renderItem={renderItem}/>
      <Text>Travel</Text>
    </View>
  )
}
export default Travel
 const styles = StyleSheet.create({
  text:{
   fontFamily:fontFamily.bold,
  }
 })