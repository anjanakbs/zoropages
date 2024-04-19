import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import Stories from '../Screens/Home/Stories';
import imagePath from '../constants/imagePath';
import {
  height,
  textScale,
  width,
} from '../styles/responsiveSize';
import SlidePost from './SlidePost';
import HeaderComp from './HeaderComp';
import styles from './VideoStyles';
import WrapperContainer from './WrapperContainer';
import fontFamily from '../styles/fontFamily';
const HeaderComponent = ({ navigation }) => (
  <View>
    <View style={{}}>
      <View style={styles.mainView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            source={imagePath.logo}
            style={{ height: 45, width: 30, paddingLeft: width / 2.5, marginLeft: 10 }}
          />
          <View style={styles.image}>
            <Image
              source={imagePath.inactive_notification}
              style={{ height: 22, width: 22 }}
            />
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Post')}>
              <Image
                source={imagePath.inactive_message}
                style={{ height: 23, width: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <Stories horizontal={true} />
  </View>
);


const VideoComponent = ({ navigation }) => {
  console.log(navigation, 'navigation on video');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const data = [
    {
      id: 0,
      title: '# travel, #relax',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: '3 days ago',
      views: '24,969,123',
      author: 'Marry',
      imageUrl:
        'https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg',
      description:
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 1,
    },
    {
      id: 1,
      title: '#Big Buck Bunny#',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
      duration: '8:18',
      uploadTime: '5 hours ago',
      views: '24,969,123',
      author: 'Leis',
      videoUrl:
        'https://videos.pexels.com/video-files/4434150/4434150-sd_540_960_30fps.mp4',
      description:
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 2,
      title: '#The first Blender Open Movie #',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '12:18',
      uploadTime: '1 month ago ',
      views: '24,969,123',
      author: 'Alex',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 4,
      title: '#For Bigger Blazes#',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '8:18',
      uploadTime: '2 days ago',
      views: '24,969,123',
      author: 'Jack Denil',
      videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',              
      description:
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 3,
    },
    {
      id: 5,
      title: '#For Bigger Blazes#',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '8:18',
      uploadTime: '1 hour ago',
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
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 2,
    },
    {
      id: 6,
      title: '#For Bigger Blazes#',
      src: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      duration: '8:18',
      uploadTime: '4 days ago',
      views: '24,969,123',
      author: 'Jack Denil',
      videoUrl: [
       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' ,
       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
      description:
        'Has plenty to offer the visiting tourist, located in the Coventry is a city with a thousands year of history that',
      subscriber: '25254545 Subscribers',
      Like: 'Like 1000',
      Comment: 'View All Comment 150',
      isLive: true,
      Follow: 'Follow',
      type: 4,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleVideoId, setVisibleVideoId] = useState(null);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    console.log(viewableItems, 'viewableItemsviewableItems');
    if (viewableItems.length > 1 && viewableItems[1].item.type == 3
      // || viewableItems[1].item.type == 4
    ) {
      setVisibleVideoId(viewableItems[1].item.id);
    } else {
      setVisibleVideoId(null);
    }
  };
  const renderHeader = ({ item }) => <HeaderComponent />;
  const renderItem = ({ item }) => (
    <View style={styles.imagepostview}>
      <View style={{ margin: 2, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', }}>
            <Image
              source={{ uri: item.src }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.postdate}>{item.uploadTime}</Text>
            </View>
          </View>
          <View style={styles.followview}>
            <Text style={styles.Follow}>{item.Follow}</Text>
            <TouchableOpacity onPress={() => setIsBottomSheetVisible(!isBottomSheetVisible)}>
              <Image source={imagePath.menu} style={styles.menuicon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

      </View>
      {item?.type == 1 ? (
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            height: height / 2,
            width: width,
            resizeMode: 'cover',
          }}
        />) : item?.type == 2 ? (
          <SlidePost imageUrl={item.imageUrl} />
        ) : item?.type == 4 ?
        <Video
          source={{ uri: item.src }}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
        />
        :
        (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Reels', { videoUrl: item.videoUrl })
            }>
            <Video
              source={{ uri: item.videoUrl }}
              style={styles.video}
              paused={visibleVideoId !== item.id}
              muted={visibleVideoId != item.id}
              volume={isPlaying ? 1.0 : 0.4}
              resizeMode="cover"
              repeat={true}
            />
          </TouchableOpacity>
        )}
      <View style={{ marginBottom: 10, }}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => alert('like')} style={{flexDirection:'row'}}>
              <Image source={imagePath.Like2} style={styles.icon} />
              <Text style={{alignSelf:'center'}}>100k</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('comment')}style={{flexDirection:'row'}}>
              <Image source={imagePath.comment3} style={styles.icon} />
              <Text style={{alignSelf:'center'}}>100k</Text>
            </TouchableOpacity>
           
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={() => alert('share')}style={{flexDirection:'row'}}>
              <Image source={imagePath.share4} style={{height:25,width:25,marginTop:7}} />
              <Text style={{alignSelf:'center',marginTop:4}}>200</Text>
            </TouchableOpacity>
          <Image source={imagePath.Save} style={styles.saveicon}/>
          {/* <Text>90</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
  return (
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
      viewablePercentThreshold={100}
      onViewableItemsChanged={handleViewableItemsChanged}
    />
  );
};
export default VideoComponent;

