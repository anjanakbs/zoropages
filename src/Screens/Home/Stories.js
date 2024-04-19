import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

const Stories = ({ navigation, horizontal, vertical, styling = {} }) => {
  const [images, setImages] = useState([
    { src: require('../../assets/images/modal.png') },
    { src: require('../../assets/images/profileimage.jpg') },
    { src: require('../../assets/images/profileimage2.jpg') },
    { src: require('../../assets/images/profileimage3.jpg') },
    { src: require('../../assets/images/profileimage.jpg') },
    { src: require('../../assets/images/profileimage2.jpg') },
    { src: require('../../assets/images/modal.png') },
  ]);
  const renderItem = ({ item, index, seprator }) => (

    <View style={{ flexDirection: 'row', flex: 1 }}>
      {index == 0 ? <View>
        <>
          <Image
            source={item.src}
            style={{
              height: 80,
              width: 80,
              margin: 8,
              borderRadius: 50
            }}
          />
          <Image source={imagePath.addicon2} style={styles.profileplusicon} />
        </>
      </View>
        : <Image
          source={item.src}
          style={{
            height: 80,
            width: 80,
            margin: 8,
            borderRadius: 50
          }}
        />}

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
        {/* <Image source={imagePath.addicon2} style={styles.profileplusicon} /> */}
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
  profileplusicon: {
    height: 25,
    width: 25,
    position: 'absolute',
    bottom: 9,
    left: 65
  }
});
