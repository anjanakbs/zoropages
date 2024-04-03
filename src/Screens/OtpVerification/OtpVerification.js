import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Stories from '../Home/Stories';
import WrapperContainer from '../../Components/WrapperContainer';
import Video from 'react-native-video';
import { height } from '../../styles/responsiveSize';
import HomeCard from '../../Components/HomeCard';


// Define your header component
const HeaderComponent = () => (
  <View>
    <Stories horizontal={true}/>
  </View>
);

// Define your footer component
const FooterComponent = () => (
  <View style={{ height: 50, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center' }}>
    <Text>Footer</Text>
  </View>
);

const OtpVerification = () => {
  // Dummy data for the flat list
  const data = [ {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '2',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    duration: '12:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Blender Inc.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
  },
  {
    id: '3',
    title: 'For Bigger Blazes',
    thumbnailUrl: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description:
      'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
  },];
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Toggle playback state
  };
 
  const [visibleVideoId, setVisibleVideoId] = useState(null);
  // const flatListRef = useRef(null);

  const handleViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1) {
      setVisibleVideoId(viewableItems[0].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };

  // Render each item in the flat list
  const renderItem = ({ item }) => (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={togglePlayback}>
      <Video
        source={{uri: item.videoUrl}}
        style={styles.video}
        paused={visibleVideoId !== item.id}
        volume={isPlaying ? 1.0 : 0.0}
        resizeMode="cover"
        repeat={true}
      />
      <HomeCard/>
      </TouchableOpacity>
    </View>
  );

  return (
    <WrapperContainer>
    <View style={{ flex: 1 }}>
      <HeaderComponent />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        // viewablePercentThreshold={100}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      <HomeCard/>
      {/* <FooterComponent /> */}
    </View>
    </WrapperContainer>
  );
};

export default OtpVerification;
const styles = StyleSheet.create({
  video: {
    width: 500,
    height: height / 1.2,
    marginTop: 10,
  },
})


// import {View, Text} from 'react-native';
// import React from 'react';
// import WrapperContainer from '../../Components/WrapperContainer';
// import HeaderComp from '../../Components/HeaderComp';
// import imagePath from '../../constants/imagePath';

// const OtpVerification = () => {
//   const goToScreen = screen => {
//     navigation.navigate(screen);
//   };
//   return (
//     <WrapperContainer>
//       <HeaderComp leftIcon={imagePath.backicon} />
//       <View>
//         <Text>OtpVerification</Text>
//       </View>
//     </WrapperContainer>
//   );
// };

// export default OtpVerification;
