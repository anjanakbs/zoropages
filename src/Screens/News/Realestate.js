import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'

const Realestate = () => {
  const propertyimage = [
    {
      src: require('../../assets/images/realestate.jpg'),
      text: 'Rs Rs 1 crore budget? Should you buy a 3 BHK in Panvel or 1 BHK in Mumbai?'
    },
    {
      src: require('../../assets/images/propertyimage.jpg'),
      text: 'Rs Rs 1 crore budget? Should you buy a 3 BHK in Panvel or 1 BHK in Mumbai?'
    },
    {
      src: require('../../assets/images/propertyimage2.jpg'),
      text: 'Rs Rs 1 crore budget? Should you buy a 3 BHK in Panvel or 1 BHK in Mumbai?'
    },
    {
      src: require('../../assets/images/propertyimage3.jpg'),
      text: 'Rs Rs 1 crore budget? Should you buy a 3 BHK in Panvel or 1 BHK in Mumbai?'
    },
    {
      src: require('../../assets/images/propertyimage4.jpg'),
      text: 'Rs Rs 1 crore budget? Should you buy a 3 BHK in Panvel or 1 BHK in Mumbai?'
    },
  ]
  const renderitem = ({ item }) => (
    <View style={{flexDirection:'row' }}>
      <Image source={item.src}
        style={{ height: 100, width: 100, margin: 10 }} />
        <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  return (

    <View style={{ flex: 1 }}>
      <FlatList
        data={propertyimage}
        renderItem={renderitem}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  )
}
export default Realestate
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 120,
    resizeMode: 'contain'
  },
  text1: {
    fontFamily: fontFamily.bold,
    // fontSize:textScale(18),
    // backgroundColor:'red'
  },
  text:{
    fontFamily:fontFamily.bold,
    alignSelf:'center',
  }
})