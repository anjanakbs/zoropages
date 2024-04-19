import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { textScale, width } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import WrapperContainer from './WrapperContainer';

const CommentbottomsheetComp = ({
  navigation,
  commentsnapPoints
}) => {
  const handleCrossPress=()=>{
Alert.alert('cut')
// navigation.goBack();
  }
  return (
    <BottomSheet index={1} snapPoints={commentsnapPoints}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <Image source={imagePath.Like} style={styles.like} />
            <Text style={{ fontFamily: fontFamily.bold }}>923</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SearchFriend')}>
            <Image source={imagePath.ic_forword} style={{ margin: 5 }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleCrossPress}>
          <Image source={imagePath.cross} style={{height:25,width:25,marginRight:10}}/>
          </TouchableOpacity>
          </View>
          <Text style={styles.textstyleheading}>Comments</Text>
          <Text style={styles.textstyle}></Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.Stream} />
            <View style={{ marginTop: 10, paddingLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold }}>Marry Lies  4h</Text>
              <Text>beautifull Image</Text>
            </View>
          </View>
          <Image source={imagePath.Like2} style={{ height: 20, width: 20, marginRight: 10, marginTop: 15 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20 }}>
          <Text>Reply</Text>
          <Text>Copy</Text>
          <Text>See translation</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.Marry} />
            <View style={{ marginTop: 10, paddingLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold }}>Marry Lies  4h</Text>
              <Text>beautifull Image</Text>
            </View>
          </View>
          <Image source={imagePath.Like2} style={{ height: 20, width: 20, marginRight: 10, marginTop: 15 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20 }}>
          <Text>Reply</Text>
          <Text>Copy</Text>
          <Text>See translation</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.Leis} />
            <View style={{ marginTop: 10, paddingLeft: 10 }}>
              <Text style={{ fontFamily: fontFamily.bold }}>Marry Lies  4h</Text>
              <Text>beautifull Image</Text>
            </View>
          </View>
          <Image source={imagePath.Like2} style={styles.heartlike} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20 }}>
          <Text>Reply</Text>
          <Text>Copy</Text>
          <Text>See translation</Text>
        </View>
      </View>
    </BottomSheet>

  );
}
export default CommentbottomsheetComp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center '
  },
  contentContainer: {
  },
  containerHeadline: {
    fontSize: textScale(25),
    fontFamily: fontFamily.bold,
  },
  textstyle: {
    paddingLeft: 10
  },
  textstyleheading: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    paddingLeft: 10,
    fontSize: textScale(15)
  },
  like: {
    tintColor: colors.theme,
    height: 25,
    width: 25,
    marginHorizontal:10
  },
  heartlike:
  {
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 15
  }

})