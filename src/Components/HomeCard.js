import { View, Text } from 'react-native'
import React from 'react'

const HomeCard = () => {
  return (
    <View>
      <Text>HomeCard</Text>
    </View>
  )
}

export default HomeCard


// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   Alert,
//   FlatList,
// } from 'react-native';
// import React from 'react';
// import WrapperContainer from './WrapperContainer';
// import imagePath from '../constants/imagePath';
// import { textScale, width } from '../styles/responsiveSize';
// import styles from '../Screens/Home/Homestyle';
// import SlidePost from './SlidePost';

// const HomeCard = ({ navigation, imageUrl, item, viewstyle = {} }) => {
//   const image = [
//     { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
//   text:'hlo' },
//     { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png' },
//     { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png' },
//   ]
//   console.log(item, 'hlo')
//   const renderItem = ({ item }) => {
//     <View style={{ flex: 1 }}>
//       <Image source={{uri:item.src}} style={{ height: 100, width: 100 }} />
//       <Text style={{backgroundColor:'red'}}>{item.text}</Text>
//     </View>
//   }
//   return (
//     <View style={{ ...viewstyle }}>
//       <View style={styles.view1}>
//         <View style={styles.imageview}>
//           <View style={{ flexDirection: 'row' }}>
//             <TouchableOpacity
//               style={{ marginRight: 8 }}
//               onPress={() => navigation.navigate('Profile')}>
//               <Image source={{}} />
//             </TouchableOpacity>
//             <View style={{ marginTop: 7, paddingLeft: 5 }}>
//               <Text style={{ color: 'black' }}>Michael</Text>
//               <Text style={{ color: 'black' }}>2 hours</Text>
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', }}>
//             <Text style={styles.follow}>Follow</Text>
//             <Image
//               source={imagePath.menu}
//               style={{ height: 22, width: 15, marginTop: 13 }}
//             />
//           </View>
//         </View>
//         <SlidePost imageUrl={imageUrl} />
       
//         <View style={styles.comment}>
//           <View style={{ flexDirection: 'row', marginTop: 8 }}>
//             <Text style={styles.relax}>{`${'#relax'}, ${'#travel'}`} </Text>
//           </View>
//           <View style={{ marginTop: 7 }}>
//             <Text style={{ fontSize: textScale(14) }}>
//               Coventry is a city with a thousands year of history
//             </Text>
//             <Text style={{ fontSize: textScale(14) }}>
//               has plenty to offer the visiting tourist, located in the
//             </Text>
//             <Text style={{ fontSize: textScale(14) }}>
//               heart of warmwickey, which is well-known as
//             </Text>
//             <Text style={{ fontSize: textScale(14) }}>Shakespeare's country</Text>
//           </View>
//           <View style={styles.likeview}>
//             <Image
//               source={imagePath.Like2}
//               style={styles.likeimage}
//             />
//             <Image
//               source={imagePath.comment3}
//               style={styles.likeimage}
//             />
//             <Image
//               source={imagePath.share5}
//               style={styles.likeimage}
//             />
//             <TouchableOpacity onPress={()=>alert('Save your data sucessfully')}>
//             <View style={styles.saveimage}>
//               <Image
//                 source={imagePath.Save}
//                 style={{ height: 25, width: 25 }}
//               />
//             </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{ marginTop: 10 }}>
//           <Text style={{ fontSize: textScale(15) }}>10000 Likes</Text>
//         </View>
//         <Text style={{ fontSize: textScale(15) }}>View all 3,027 comment</Text>
//       </View>
//     </View>
//   );
// };
// export default HomeCard;
