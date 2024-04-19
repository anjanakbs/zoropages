import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import fontFamily from '../styles/fontFamily';
import { textScale } from '../styles/responsiveSize';

const Storycomponent = ({navigation}) => {
    const [images, setImages] = useState([
      {src:require('../assets/images/Stream.png'), text:'Merry'},
        {src:require('../assets/images/Marry.png'),text:'Loy'},
        {src:require('../assets/images/jack.png'),text:'Jack'},
        {src:require('../assets/images/Miranda.png'),text:'Lizzel'},
        {src:require('../assets/images/Jones.png'),text:'Mira'},
        {src:require('../assets/images/Leis.png'),text:'Merry'},
        {src:require('../assets/images/Stream.png'),text:'Merry'},
      ]);

    
      const renderItem = ({item, index, seprator}) => (
          <View style={{ flex: 1}}>
            <Image
              source={item.src}
              style={{
                resizeMode: 'contain',
                height: 80,
                margin: 8,
              }}
            />
            <Text style={styles.itemtext}>{item.text}</Text>
            </View>
            );
           
  return (
    <View>
        <View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Storycomponent
const styles = StyleSheet.create({
  itemtext:{
    fontFamily:fontFamily.medium,
    fontSize:textScale(16),
    textAlign:'center'
  }
})