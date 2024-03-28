import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';
import FriendStories from './FriendStories';

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

  const [text, setText] = useState([
    {text1: '  Stories  '},
    {text2: '  Latest  '},
    {text3: '  Popular  '},
    {text4: '  Friend  '},
    {text1: '  Stories  '},
    {text2: '  Latest  '},
    {text3: '  Popular  '},
    {text4: '  Friend  '},
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

  const renderItem2 = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        borderRadius: 10,
      }}>
      <View style={styles.viewtext1}>
        <Text
          style={styles.itemtext1}
          onPress={() => navigation.navigate('FriendStories')}>
          {item.text1}
        </Text>
      </View>
      <Text
        style={styles.itemtext2}
        onPress={() => navigation.navigate('Popular')}>
        {item.text2}
      </Text>
      <Text style={styles.itemtext3}>{item.text3}</Text>
      <Text style={styles.itemtext4}>{item.text4}</Text>
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
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <FlatList
          horizontal={horizontal}
          // vertical={vertical}
          showsHorizontalScrollIndicator={false}
          data={text}
          renderItem={renderItem2}
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
