import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../styles/colors';

const Stories = ({navigation, horizontal, vertical, styling = {}}) => {
  const [images, setImages] = useState([
    {src: require('../../assets/images/Addicon.png')},
    {src: require('../../assets/images/Marry.png')},
    {src: require('../../assets/images/jack.png')},
    {src: require('../../assets/images/Miranda.png')},
    {src: require('../../assets/images/Jones.png')},
    {src: require('../../assets/images/Leis.png')},
    {src: require('../../assets/images/Stream.png')},
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flexDirection: 'row', flex: 1}}>
      <Image
        source={item.src}
        style={{
          resizeMode: 'contain',
          height: 80,
          margin: 8,
        }}
      />
    </View>
  );
  return (
    <View>
      <View>
        <FlatList
          horizontal={horizontal}
          vertical={vertical}
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={renderItem}
          Styling={styling}
        />
      </View>
    </View>
  );
};
export default Stories;
const styles = StyleSheet.create({
  itemtext1: {
    backgroundColor: colors.darkgreen,
    color: colors.white,
    height: 20,
  },
  itemtext2: {
    backgroundColor: colors.blackOpacity40,
    color: colors.white,
    height: 20,
  },
  itemtext3: {
    backgroundColor: colors.theme,
    color: colors.white,
    height: 20,
  },
  itemtext4: {
    backgroundColor: colors.theme,
    color: colors.white,
    height: 20,
  },
});
