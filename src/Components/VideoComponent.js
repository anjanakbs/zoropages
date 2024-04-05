import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Stories from '../Screens/Home/Stories';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../styles/responsiveSize';
import SlidePost from './SlidePost';
import {useNavigation} from '@react-navigation/native';
// import styles from './VideoStyles';
const HeaderComponent = () => (
  <View>
    <Stories horizontal={true} />
  </View>
);
const VideoComponent = ({navigation}) => {
  console.log(navigation, 'navigation on video');
  const data = [
    {
      id: 0,
      title: '# travel, #relax',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Marry',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      description:
        ' has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: ' View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 1,
    },
    {
      id: 1,
      title: ' #Big Buck Bunny#',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Leis',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        ' has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: ' View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 2,
      title: '#The first Blender Open Movie #',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '12:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Alex',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        ' has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: ' View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 4,
      title: '#For Bigger Blazes#',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'Jack Denil',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description:
        ' has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: ' View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 5,
      title: '#For Bigger Blazes#',
      src: 'https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg',
      duration: '8:18',
      uploadTime: 'May 9, 2011',
      views: '24,969,123',
      author: 'John Doe',
      imageUrl: [
        {
          src: 'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0',
        },
        {
          src: 'https://images.unsplash.com/photo-1625937282844-4a0cb4665820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF1c3RyYWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
        },
        {
          src: 'https://source.unsplash.com/random/200x200?sig=1',
        },
      ],
      description:
        ' has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: ' View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 2,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };
  const [visibleVideoId, setVisibleVideoId] = useState(null);
  // const handleViewableItemsChanged = ({ viewableItems }) => {
  //   if (viewableItems.length > 0) {
  //     setFocusedIndex(viewableItems[0].index);
  //   }
  // };
  const handleViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 3) {
      setVisibleVideoId(viewableItems[1].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const renderHeader = ({item}) => <HeaderComponent />;
  const renderItem = ({item}) => (
    <View style={styles.imagepostview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.src}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              margin: 5,
            }}
          />
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <View style={styles.followview}>
          <Text style={styles.Follow}>{item.Follow}</Text>
          <Image source={imagePath.menu} style={styles.menuicon} />
        </View>
      </View>
      {item?.type == 1 ? (
        <Image
          source={{uri: item.imageUrl}}
          style={{
            height: height / 2,
            width: width,
            resizeMode: 'cover',
          }}
        />
      ) : item?.type == 2 ? (
        <SlidePost imageUrl={item.imageUrl} />
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Reels', {videoUrl: item.videoUrl}) }>
          <Video
            source={{uri: item.videoUrl}}
            style={styles.video}
            paused={visibleVideoId !== item.id}
            muted={visibleVideoId != item.id}
            volume={isPlaying ? 1.0 : 0.4}
            resizeMode="contain"
            repeat={true}
          />
        </TouchableOpacity>
      )}
      <View style={{marginBottom: 10, padding: 5}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imagePath.Like2} style={styles.icon} />
            <Image source={imagePath.comment3} style={styles.icon} />
            <Image
              source={imagePath.share4}
              style={styles.icon}
              // tintColor={colors.darkgreen}
            />
          </View>
          <Image source={imagePath.Save} style={styles.saveicon} />
        </View>
        <Text style={styles.Comment}>{item.Like}</Text>
        <Text style={styles.Comment}>{item.Comment}</Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        // margin:10
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
        // pagingEnabled
        viewablePercentThreshold={100}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
    </View>
  );
};
export default VideoComponent;
const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 2 - 50,
    marginTop: 10,
  },
  imagepostview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  videopostview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.white,
    height: height / 1 + 90,
    width: width,
    marginBottom: 10,
    marginBottom: 10,
  },
  imageview: {
    flexDirection: 'row',
    marginBottom: moderateScale(5),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: fontFamily.bold,
    color: colors.darkgreen,
  },
  description: {
    fontSize: moderateScale(16),
    fontFamily: fontFamily.regular,
  },
  Comment: {
    fontSize: moderateScale(15),
    fontFamily: fontFamily.medium,
    marginTop: 5,
  },
  author: {
    fontSize: moderateScale(20),
    fontFamily: fontFamily.bold,
    marginTop: 10,
    paddingLeft: 8,
  },
  followview: {
    flexDirection: 'row',
  },
  Follow: {
    fontSize: textScale(18),
    marginTop: 10,
    marginRight: 20,
    textAlign: 'center',
    fontSize: textScale(14),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.lightgrey,
    height: 30,
    width: 80,
    paddingTop: 5,
    color: colors.black,
    backgroundColor: colors.lightgrey,
  },
  videofollow: {
    flexDirection: 'row',
  },
  icon: {
    height: 28,
    width: 28,
    marginLeft: 10,
    marginTop: 9,
  },
  menuicon: {
    height: 18,
    width: 20,
    marginTop: 13,
  },
  saveicon: {
    height: 28,
    width: 28,
    // tintColor: colors.darkgreen,
    marginTop: 10,
    marginRight: 10,
  },
});
