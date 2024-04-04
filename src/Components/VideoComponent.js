import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Stories from '../Screens/Home/Stories';
import {
  height,
  width,
} from '../styles/responsiveSize';
import HomeCard from './HomeCard';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import styles from './VideoStyles';
const HeaderComponent = () => (
  <View>
    <Stories horizontal={true} />
  </View>
);
const VideoComponent = () => {
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
  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };
  const [visibleVideoId, setVisibleVideoId] = useState(null);

  const handleViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 3) {
      setVisibleVideoId(viewableItems[1].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const renderItem = ({item}) => (
    <View>
      {item?.type == 1 ? (
        <View style={styles.imagepostview}>
          <View style={styles.imageview}>
            <View style={{flexDirection:'row'}}>
            <Image
              source={{uri: item.src}}
              style={{height: 50, width: 50, borderRadius: 25, marginLeft: 5}}
            />
            <Text style={styles.author}>{item.author}</Text>
            </View>
            <View style={styles.followview}>
              <Text style={styles.Follow}>{item.Follow}</Text>
              <Image source={imagePath.menu} style={styles.menuicon} />
            </View>
          </View>
          <Image
            source={{uri: item.imageUrl}}
            style={{
              height: height / 2,
              width: width,
              resizeMode: 'cover',
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={imagePath.Like} style={styles.icon} />
            <Image source={imagePath.comment} style={styles.icon} />
            <Image
              source={imagePath.share5}
              style={styles.icon}
              tintColor={colors.darkgreen}
            />
            <Image source={imagePath.Save} style={styles.saveicon} />
          </View>
          <Text style={styles.Comment}>{item.Like}</Text>
          <Text style={styles.Comment}>{item.Comment}</Text>
        </View>
      ) : item?.type == 2 ? (
        <HomeCard imageUrl={item.imageUrl} />
      ) : (
        <TouchableOpacity onPress={togglePlayback}>
          <View style={styles.videopostview}>
            <View style={styles.imageview}>
              <View style={{flexDirection:'row', }}> 
              <Image
                source={{uri: item.src}}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  marginLeft: 10,
                 
                }}
              />
              <Text style={styles.author}>{item.author}</Text>
              </View>
              <View style={styles.videofollow}>
                <Text style={styles.Follow}>{item.Follow}</Text>
                <Image
                  source={imagePath.menu}
                  style={{height: 18, width: 20, marginTop: 14}}
                />
              </View>
            </View>
            <Video
              source={{uri: item.videoUrl}}
              style={styles.video}
              paused={visibleVideoId !== item.id}
              volume={isPlaying ? 1.0 : 0.0}
              resizeMode="cover"
              repeat={true}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image source={imagePath.Like} style={styles.icon} />
              <Image source={imagePath.comment} style={styles.icon} />
              <Image
                source={imagePath.share5}
                style={styles.icon}
                tintColor={colors.darkgreen}
              />
              <Image source={imagePath.Save} style={styles.saveicon} />
            </View>
            <Text style={styles.Comment}>{item.Like} </Text>
            <Text style={styles.Comment}>{item.Comment} </Text>
          </View>
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
        // pagingEnabled
        viewablePercentThreshold={100}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
    </View>
  );
};
export default VideoComponent;
