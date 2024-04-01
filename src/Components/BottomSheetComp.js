import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';

export default function BottomSheetComp({
  navigation,
  title,
  sheetStyle = {},
}) {
  const snapPoints = useMemo(() => ['50%', '100%'], []); //snappoints is used for set bottomSheet Height

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <BottomSheet
          index={1}
          snapPoints={snapPoints}
          title={title}
          style={{...sheetStyle}}>
          <View style={styles.contentContainer}>
            <Text style={styles.containerHeadline}> BottomSheetScreen</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>Popular</Text>
            
            </View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Wijie Bar and resto
            </Text>
            <Text style={{color: 'white'}} numberOfLines={4}>
              Most whole Alaskan Red King Crabs get broken down into legs,
              claws, and lump meat.We offer all of these options as well in our
              online shop, but there is nothing like getting the whole...
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{color: 'white', justifyContent: 'space-between'}}>
                Popular Menu
              </Text>
              <Text style={{color: 'white'}}>View More</Text>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  containerHeadline: {
    fontWeight: '600',
    padding: 20,
    color: 'white',
  },
});
