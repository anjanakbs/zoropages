import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import SearchFriend from './SearchFriend';
import SearchList from './SearchList';

const Following = ({navigation}) => {
  const data =[
    { src: require('../../assets/images/Marry.png'),
  text:'hlo' },
    { src: require('../../assets/images/profileimage.jpg'),
  text:'hello' },
    { src: require('../../assets/images/profileimage2.jpg'),
  text:'hey' },
  ]
  const renderItem =(item)=>{
    console.log('hlo',item);
    <View style={{flex:1,}}>
      <Text>{item.text}</Text>
      <Image source={item.src}
      style={{
        height:100,
        width:100,
      }}/>
    </View>
  }
  return (
    <WrapperContainer>
      <View>
        <Text>Following</Text>
        {/* <SearchList/> */}
        <FlatList 
        horizontal={true}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}/>
      </View>
    </WrapperContainer>
  );
};

export default Following;
