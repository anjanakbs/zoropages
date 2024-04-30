import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import fontFamily from '../../styles/fontFamily'

const Sports = () => {
  const sportsimage = [
    {
      src: require('../../assets/images/sports2.jpg'),
      text: 'AI in football: How new tech can help teams take more effective corner kicks'
    },
    {
      src: require('../../assets/images/sports2.jpg'),
      text: 'AI in football: How new tech can help teams take more effective corner kicks'
    },
    {
      src: require('../../assets/images/sports2.jpg'),
      text: 'AI in football: How new tech can help teams take more effective corner kicks'
    },
    {
      src: require('../../assets/images/sports2.jpg'),
      text: 'AI in football: How new tech can help teams take more effective corner kicks'
    },
  ]
  const renderItem = ({item}) =>(
    <View style={{flexDirection:'row'}}>
      <Image source={item.src} style={{ height:100,width:100,margin:10,}}/>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  return (
    <View>
      <FlatList 
      data={sportsimage}
      renderItem={renderItem}
      />
      <Text>Sports</Text>
    </View>
  )
}

export default Sports
const styles = StyleSheet.create({
  text:{
    fontFamily:fontFamily.bold,
    alignSelf:'center'
  }
})