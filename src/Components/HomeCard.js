// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import WrapperContainer from './WrapperContainer';
// import imagePath from '../constants/imagePath';
// import {moderateScale, textScale} from '../styles/responsiveSize';
// import styles from '../Screens/Home/Homestyle';
// import colors from '../styles/colors';

// const HomeCard = ({viewstyle = {}}) => {
//   return (
//     <View style={{...viewstyle}}>
//       <View style={styles.imageview}>
//             <Image source={imagePath.Miranda} />
//             <View style={styles.text} >
//               <Text style={{color:colors.black}}>Michael</Text>
//               <Text style={{color:colors.black}}>2 hours</Text>
//             </View>
//               <Text style={styles.following}>Following</Text>
//           </View>
//       <View>
//         <ImageBackground
//           source={imagePath.Dog}
//           resizeMode="cover"
//           style={styles.imagebackground}>
         
//         </ImageBackground>
//         <View style={styles.comment}>
//         <View style={styles.likeview}>
//             <Image source={imagePath.Like3} style={styles.likeimage} tintColor={colors.darkgreen}/>
//             {/* <Image source={imagePath.Like} style={styles.likeimage} tintColor={colors.darkgreen}/> */}
//             {/* <Image source={imagePath.Like2} style={styles.likeimage} tintColor={colors.darkgreen}/> */}
//             {/* <Image source={imagePath.comment} style={styles.likeimage} tintColor={colors.darkgreen}/> */}
//             <Image source={imagePath.comment2} style={styles.likeimage} tintColor={colors.darkgreen}/>
//             {/* <Image source={imagePath.share} style={styles.likeimage} tintColor={colors.darkgreen}/> */}
//             <Image source={imagePath.share2} style={styles.likeimage} tintColor={colors.darkgreen}/>
//             <View style={styles.saveimage}>
//             <Image source={imagePath.Save} style={{height:25,width:25,}} tintColor={colors.darkgreen}/>
//           </View>
//           </View>
//           <View style={{flexDirection: 'row', marginTop: 10}}>
//             <Text style={styles.relax}>#Love </Text>
//             <Text style={styles.travel}>#Loyalty</Text>
//           </View>
          
//           <View style={{marginTop:5}}>
//             <Text style={{fontSize: textScale(14)}}>
//               Animals are better than Humans
//             </Text>
//             <Text style={{fontSize: textScale(14)}}>
//               and they are very loyal
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// export default HomeCard;










import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import WrapperContainer from './WrapperContainer';
import imagePath from '../constants/imagePath';
import {textScale} from '../styles/responsiveSize';
import styles from '../Screens/Home/Homestyle';
import colors from '../styles/colors';

const HomeCard = ({viewstyle = {}}) => {
  return (
    <View style={{...viewstyle}}>
      <View>
        <ImageBackground
          source={imagePath.travel}
          resizeMode="cover"
          style={styles.imagebackground}>
          <View style={styles.imageview}>
            <Image source={imagePath.Miranda} />
            <View style={{marginTop: 0}}>
              <Text style={{color: 'white'}}>Michael</Text>
              <Text style={{color: 'white'}}>2 hours</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.comment}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.relax}>{`${'#relax'}, ${'#travel'}`} </Text>
            {/* <Text style={styles.travel}>#travel</Text> */}
          </View>
          <View style={{marginTop: 8}}>
            <Text style={{fontSize: textScale(14)}}>
              Coventry is a city with a thousands year of history that
            </Text>
            <Text style={{fontSize: textScale(14)}}>
              has plenty to offer the visiting tourist, located in the
            </Text>
            <Text style={{fontSize: textScale(14)}}>
              heart of warmwickey, which is well-known as
            </Text>
            <Text style={{fontSize: textScale(14)}}>Shakespeare's country</Text>
          </View>
          <View style={styles.likeview}>
            <Image source={imagePath.Like} style={styles.likeimage} tintColor={colors.darkgreen}/>
            <Image source={imagePath.comment} style={styles.likeimage} tintColor={colors.darkgreen}/>
            <Image source={imagePath.share2} style={styles.likeimage} tintColor={colors.darkgreen}/>
           <View style={styles.saveimage}>
            <Image source={imagePath.Save}style={{height:25,width:25,}} tintColor={colors.darkgreen}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeCard;
