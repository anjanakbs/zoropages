import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {height, moderateScale, width} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const Message = () => {
  const [images, setImages] = useState([
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: ' You are my good friend ..........',
     
    },
    {
      src: require('../../assets/images/jack.png'),
      text1: 'Jack Owen',
      text2: ' You are my good friend ..........',
     
    },
    {
      src: require('../../assets/images/Miranda.png'),
      text1: 'Miranda West',
      text2: ' You are my good friend ..........',
    
    },
    {
      src: require('../../assets/images/Jones.png'),
      text1: 'Michael Jones',
      text2: ' You Have Friends an facebook',
      
    },
    {
      src: require('../../assets/images/Leis.png'),
      text1: 'Leis Conner',
      text2: ' By see You soon >>>>>>>>>>',
      
    },
    {
      src: require('../../assets/images/Stream.png'),
      text1: 'Stream Kiens',
      text2: ' You Have Friends an facebook',
     
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: 'You know,Ive had some Beers',
     
    },
    {
      src: require('../../assets/images/Marry.png'),
      text1: 'Marry Olsen',
      text2: 'You know,Ive had some Beers',
     
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
      <View style={styles.follow}>
        <Text style={{color: 'black'}}>{item.text3}</Text>
        <Text style={styles.mtext}>{item.text4}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={props => {
          console.log('props', props); 
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

export default Message;
const styles = StyleSheet.create({
  follow: {
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
    textAlign: 'center',
    fontFamily: fontFamily.bold,
  },
  // mtext: {
  //   backgroundColor: colors.theme,
  //   textAlign: 'center',
  //   color: colors.white,
  // },
});
