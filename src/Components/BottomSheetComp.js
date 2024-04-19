import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';
import { textScale, width } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import WrapperContainer from './WrapperContainer';

const BottomSheetComp = ({ navigation, snapPoints }) => {
  const [pageHidden, setPageHidden] = useState(false);
  return (
    <BottomSheet index={1}
      snapPoints={snapPoints}>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.textstyleheading}>Why am i seeing this post</Text>
          <Text style={styles.textstyle}>You follow this channel</Text>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.Save} style={{ height: 25, width: 25, marginTop: 10, marginLeft: 10, }} />
            <View>
              <Text style={styles.textstyleheading}>Save video</Text>
              <Text style={styles.textstyle}>Add this to your save videos</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <Image source={imagePath.viewicon} style={styles.viewicon} />
        <Text style={styles.icontext}>100views</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={imagePath.hidepost} style={{ height: 30, width: 30, marginTop: 10, marginLeft: 10 }} />
            <View>
              <Text style={styles.textstyleheading}>Hide Post</Text>
              <Text style={styles.textstyle}>See fewer posts like this</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={imagePath.hidepost} style={{ height: 30, width: 30, marginTop: 10, marginLeft: 10 }} />
            <View>
              <Text style={styles.textstyleheading}>Report Post</Text>
              <Text style={styles.textstyle}>Report this channel</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={imagePath.inactive_notification} style={{ height: 25, width: 25, marginLeft: 10 }} />
            <View>
              <Text style={styles.textstyleheading}>Turn On Notifications for this post</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={imagePath.copylink} style={{ height: 25, width: 25, marginLeft: 10 }} />
            <View>
              <Text style={styles.textstyleheading}>Copy Link</Text>
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>

  );
}
export default BottomSheetComp;

const styles = StyleSheet.create({
  container: {
    width: width / 1 - 20,
    marginLeft: 10,
    backgroundColor: colors.lightgrey, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  contentContainer: {
    // alignItems: 'center'
  },
  containerHeadline: {
    fontSize: textScale(25),
    fontFamily: fontFamily.bold,
    // padding: 20
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
  viewicon:{
    height: 20,
    width: 20,
    marginTop: 5,
    marginHorizontal: 10
  },
  icontext:{
    marginTop: 7,
    fontFamily: fontFamily.bold,
    marginRight:5
  }
});