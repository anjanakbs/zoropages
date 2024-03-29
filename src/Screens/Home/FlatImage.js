import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { height, width } from '../../styles/responsiveSize';

const FlatImage = ({
  flatstyle={}
}) => {
    const [flatimage, setFlatImage] = useState([
        {src:require('../../assets/images/waterfal.png')},
        {src:require('../../assets/images/waterfal.png')},
        {src:require('../../assets/images/waterfal.png')},
        {src:require('../../assets/images/waterfal.png')},
        {src:require('../../assets/images/waterfal.png')}
    ]);
    const renderItem = ({item, index, seprator}) => (
        <View style={{ flex: 1}}>
          <Image
            source={item.src}
            style={{
              resizeMode: 'contain',
              margin: 10,
              // height:height-50,
              // width:width-0,
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