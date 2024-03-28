import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../styles/colors';

const Request = ({horizontal, vertical, styling = {}}) => {
  const [images, setImages] = useState([
    {
      src: require('../../assets/images/Marry.png'),
      text: 'Marry Olsen following you also she sent you friend request',
    },
    {src: require('../../assets/images/jack.png'), text: 'Jake Like Your Post'},
    {
      src: require('../../assets/images/Miranda.png'),
      text: 'Miranda comment on your post',
    },
    {
      src: require('../../assets/images/Jones.png'),
      text: 'Marry Olsen react for story Killin chillin to your timeline',
     
    },
    {
      src: require('../../assets/images/Leis.png'),
      text: 'Leis like your story',
    },
    {src: require('../../assets/images/Stream.png'), text: 'Stream Live Now'},
    {
      src: require('../../assets/images/Leis.png'),
      text: 'Leis like your story',
    }, 
    {
      src: require('../../assets/images/Leis.png'),
      text: 'Leis like your story',
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
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
  return (
    <View>
      <View>
        <FlatList
         ItemSeparatorComponent={(props) => {
          console.log('props', props); // here you can access the trailingItem with props.trailingItem
          return (<View style={{height: 1, backgroundColor: props.highlighted ? 'green' : 'grey'}} />);
        }}
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
export default Request;
const styles = StyleSheet.create({
  text: {alignSelf: 'center'},
});
