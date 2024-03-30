import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {width} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const SearchList = ({navigation}) => {
  const [images, setImages] = useState([
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/jack.png'),
      text1: 'Jack Owen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Miranda.png'),
      text1: 'Miranda West',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Jones.png'),
      text1: 'Michael Jones',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Leis.png'),
      text1: 'Leis Conner',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Stream.png'),
      text1: 'Stream Kiens',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You Have Friends an facebook',
      text3: 'Follow',
    },
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

      <View style={{alignSelf: 'center'}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          {item.text1}
        </Text>
        <Text style={{color: 'black'}}>{item.text2}</Text>
      </View>
      <View style={styles.followView}>
        <Text
          style={styles.follow}
          onPress={() => navigation.navigate('MaterialTopTab')}>
          {item.text3}
        </Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={props => {
          console.log('props', props); // here you can access the trailingItem with props.trailingItem
          return (
            <View
              style={{
                height: 1,
                backgroundColor: props.highlighted ? 'green' : 'grey',
              }}
            />
          );
        }}
        data={images}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchList;
const styles = StyleSheet.create({
  follow: {
    backgroundColor: colors.theme,
    color: colors.white,
    height: 27,
    width: 80,
    textAlign: 'center',
    paddingTop: 3,
    fontFamily: fontFamily.bold,
  },
  followView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width / 15,
    marginLeft: 12,
    borderRadius: 19,
  },
});
