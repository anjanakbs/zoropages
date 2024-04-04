import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import HomeCard from '../../Components/HomeCard';
import {height, width} from '../../styles/responsiveSize';
import Stories from '../Home/Stories';

// Define your header component
const HeaderComponent = () => (
  <View>
    <Stories horizontal={true} />
  </View>
);

const OtpVerification = () => {
  // Dummy data for the flat list
  const data = [
    {
      id: 0,
      title: 'Big Buck Bunny',
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Vlc Media Player',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: '25254545 Subscribers',
      isLive: true,
      type: 1,
    },
    {
      id: 1,
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
      type: 2,
    },
    {
      id: 2,
      title: 'The first Blender Open Movie from 2006',
      thumbnailUrl:
        'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
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
      type: 2,
    },
    {
      id: 4,
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
      type: 2,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying); // Toggle playback state
  };

  const [visibleVideoId, setVisibleVideoId] = useState(null);
  // const flatListRef = useRef(null);

  const handleViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 2) {
      setVisibleVideoId(viewableItems[1].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };

  // Render each item in the flat list
  const renderItem = ({item}) => (
    <View>
      {item?.type == 1 ? (
        <HomeCard />
      ) : (
        <TouchableOpacity onPress={togglePlayback}>
          <Video
            source={{uri: item.videoUrl}}
            style={styles.video}
            paused={visibleVideoId !== item.id}
            volume={isPlaying ? 1.0 : 0.0}
            resizeMode="cover"
            repeat={true}
          />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderHeader = ({item}) => <HeaderComponent />;

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{
          alignSelf: 'center',
          flex: 1,
          marginTop: 20,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        viewablePercentThreshold={100}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 1.5,
  },
});
export default OtpVerification;

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
