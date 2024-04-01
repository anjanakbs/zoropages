import {View, Text, ImageBackground, FlatList} from 'react-native';
import React, {useState} from 'react';
import { height, width } from '../styles/responsiveSize';

const SlidePost = () => {
  const [slideimage, setSlideImage] = useState([
    {src: require('../assets/images/Dog.png')},
    {src: require('../assets/images/modal.png')},
    {src: require('../assets/images/travel.png')},
    {src: require('../assets/images/travel2.png')},
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <ImageBackground
        source={item.src}
        style={{height: height / 4, width: width - 20, borderRadius: 20,marginRight:10}}
      />
    </View>
  );
  return (
    <View>
      <FlatList
        data={slideimage}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SlidePost;
