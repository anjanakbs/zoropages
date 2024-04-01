import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
// import styles from './Homestyle';

const FlatImage = ({flatstyle = {}, navigation}) => {
  const [flatimage, setFlatImage] = useState([
    {src: require('../../assets/images/latest.png'), text: 'Follow'},
    {src: require('../../assets/images/image.png'), text: 'Follow'},
    {src: require('../../assets/images/latest.png'), text: 'Follow'},
    {src: require('../../assets/images/image.png'), text: 'Follow'},
    {src: require('../../assets/images/latest.png')},
  ]);
  const renderItem = ({item, index, seprator}) => (
    <View style={{flex: 1}}>
      <Image
        source={item.src}
        style={{
          height: 100,
          width: 100,
          resizeMode: 'contain',
          margin: 10,
          ...flatstyle,
        }}
      />
      <View style={{}}>
       <TouchableOpacity>
        <Text
          style={styles.followtext}>    
          Follow
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.mainview}>
      <Text style={styles.text}>Suggestion</Text>
      <View>
        <FlatList
          data={flatimage}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default FlatImage;

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    marginTop: 10,
  },
  text: {
    fontSize: textScale(20),
    paddingLeft: 10,
  },
  followtext: {
    textAlign: 'center',
    fontSize: textScale(14),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkgreen,
    height: 30,
    width: 90,
    paddingTop: 5,
    marginLeft: 15,
    color: colors.darkgreen,
  },
});
