import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {height, width} from '../styles/responsiveSize';

const SlidePost = (props) => {
  const [slideimage, setSlideImage] = useState(props?.imageUrl);

  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <Image
        source={{uri: item.src}}
        style={{
          height: height / 4,
          width: width - 20,
          borderRadius: 20,
          marginRight: 10,
        }}
      />
    </View>
  );
  return (
    <View>
      <FlatList
        data={slideimage}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SlidePost;
