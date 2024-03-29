import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import {height, textScale, width} from '../../styles/responsiveSize';
import List from './Stories';
import Stories from './Stories';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import fontFamily from '../../styles/fontFamily';
import styles from '../Home/Homestyle';
import HeaderComp from '../../Components/HeaderComp';
import HomeCard from '../../Components/HomeCard';
import WrapperContainer from '../../Components/WrapperContainer';
import FlatImage from './FlatImage';
import VideoComponent from '../../Components/VideoComponent';

const Home = ({navigation}) => {
  return (
    // <SafeAreaView style={{flex: 1, margin: 10}}>
    <WrapperContainer>
      <HeaderComp leftIcon={imagePath.backicon} />
      <View style={styles.mainView}>
        <Image
          source={imagePath.logo}
          style={{height: 35, width: 30, paddingLeft: width / 2.5}}
        />
        <View style={styles.image}>
          <Image
            source={imagePath.inactive_notification}
            style={{height: 22, width: 22}}
            tintColor={colors.darkgreen}
          />
          <View style={{marginLeft: 20}}>
            <Image
              source={imagePath.chat}
              style={{height: 22, width: 22}}
              tintColor={colors.darkgreen}
            />
          </View>
        </View>
      </View>
      <View>
        <Stories horizontal navigation={navigation} />
      </View>
      <ScrollView>
        <HomeCard />
          <FlatImage/>
          {/* <VideoComponent/> */}
      </ScrollView>
    </WrapperContainer>
    /* </SafeAreaView> */
  );
};
export default Home;

// import {
//   View,
//   Text,
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   FlatList,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import TextInputWithLabel from '../../Components/TextInputWithLabel';
// import imagePath from '../../constants/imagePath';
// import {height, textScale, width} from '../../styles/responsiveSize';
// import List from './Stories';
// import Stories from './Stories';
// import colors from '../../styles/colors';
// import strings from '../../constants/lang';
// import fontFamily from '../../styles/fontFamily';
// import styles from '../Home/Homestyle';
// import HeaderComp from '../../Components/HeaderComp';
// import HomeCard from '../../Components/HomeCard';

// const Home = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1, margin: 10}}>
//       <HeaderComp leftIcon={imagePath.backicon} />
//       <View style={styles.mainView}>
//         <TextInputWithLabel
//           placeholder={strings.search}
//           placeholderTextColor={colors.black}
//           lefticon={imagePath.Searchicon}
//           extraStyle={{
//             paddingLeft: 20,
//             width: width / 2,
//           }}
//         />
//         <View style={styles.image}>
//           <Image source={imagePath.Cameraicon} />
//         </View>
//       </View>
//       <View>
//         <Stories horizontal navigation={navigation} />
//       </View>
//       <ScrollView>
//         <HomeCard />
//         <View>
//           <Image source={imagePath.lastpost} style={styles.lastpost} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Home;
