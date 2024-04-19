import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import SearchPeople from './SearchPeople';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';

const ForYou = () => {
  const [forYou, setForYou] = useState([
    {src: require('../../assets/images/rezia.png')},
    {src: require('../../assets/images/jack2.png')},
    {src: require('../../assets/images/rezia.png')},
    {src: require('../../assets/images/jack2.png')},
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <Image
        source={item.src}
        style={{
          resizeMode: 'contain',
          margin: 8,
        }}
      />
    </View>
  );
  return (
    <WrapperContainer>
      <View>
        <View>
          {/* <FlatList data={forYou} renderItem={renderItem} horizontal={true} /> */}
          <Text>hlo</Text>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ForYou;
