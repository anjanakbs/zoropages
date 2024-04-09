import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';
import { textScale, width } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import WrapperContainer from './WrapperContainer';

const BottomSheetComp = ({ navigation }) => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%','100%'], []);

  return (
<View style={styles.container}>
      <Text>hlo</Text>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <View style={{
            width:width/1.1,
           marginLeft:10,
          //  marginRight:20,
            backgroundColor: colors.lightgrey, shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            borderRadius:10
          }}>
            <Text style={{ marginTop: 10, marginBottom: 10, paddingLeft: 10 }}>Why am i seeing this post</Text>
            <Text style={{ marginTop: 10, marginBottom: 10, paddingLeft: 10 }}>You follow this channel</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}
export default BottomSheetComp;

const styles = StyleSheet.create({
  container: {
   flex:0.5
  },
  contentContainer: {
    // alignItems: 'center'
  },
  containerHeadline: {
    fontSize: textScale(25),
    fontFamily: fontFamily.bold,
    // padding: 20
  }
});