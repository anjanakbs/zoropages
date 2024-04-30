import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';
import { textScale, width } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import WrapperContainer from './WrapperContainer';

const Actionsheets = ({ navigation, snapPoints }) => {
  const [pageHidden, setPageHidden] = useState(false);
  return (
    <BottomSheet index={1}
      snapPoints={snapPoints}>
     <View style={styles.mainview}>
      <View style={styles.usernameview}>
        <Image source={imagePath.modal}  style={{height:50,width:50,borderRadius:50,}}/>
        <Text style={styles.usertext}>Marry__001</Text>
      </View>
      <View style={styles.accountview}>
          <Image source={imagePath.plusicon}style={{height:50,width:50}}/>
          <Text style={styles.usertext}>Add instagram account</Text>
        </View>
     </View>
    </BottomSheet>

  );
}
export default Actionsheets;

const styles = StyleSheet.create({
mainview:{
  margin:10,
  backgroundColor:colors.blackOpacity10,
  borderRadius:20
},
usernameview:{
  flexDirection:'row',
  margin:10
},
accountview:{
  flexDirection:'row',
  margin:10
},
usertext:{
  alignSelf:'center'
}
})