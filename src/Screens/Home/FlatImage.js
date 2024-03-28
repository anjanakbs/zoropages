import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

const FlatImage = ({
  flatstyle={}
}) => {
    const [flatimage, setFlatImage] = useState([
        {src:require('../../assets/images/latest.png')},
        {src:require('../../assets/images/latest.png')},
        {src:require('../../assets/images/latest.png')},
        {src:require('../../assets/images/latest.png')},
        {src:require('../../assets/images/latest.png')}
    ]);
    const renderItem = ({item, index, seprator}) => (
        <View style={{ flex: 1}}>
          <Image
            source={item.src}
            style={{
              resizeMode: 'contain',
              // height: 80,
              margin: 8,
              ...flatstyle
            }}
          />
          </View>
          );
  return (
    <View>
       <View>
        <FlatList
        data={flatimage}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
        </View>
    </View>
  )
}

export default FlatImage