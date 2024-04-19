import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import { height, width } from '../styles/responsiveSize';
import CarouselSlider, { Pagination } from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('screen').width;

// import CarouselSlider from 'react-native-snap-carousel';

const SlidePost = (props) => {
  const carouselRef = useRef();
const [activeSlide, setActiveSlide] = useState(0)
  const [slideimage, setSlideImage] = useState(props?.imageUrl);

  const renderItem = ({ item, index, seprator }) => (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: item.src }}
        style={{
          height: height / 2.5,
          width: width,
          // borderRadius: 20,
          // marginRight: 10,
          marginRight: 3
        }}
      />
    </View>
  );
  return (
    <View>
      {/* <FlatList
        data={slideimage}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      /> */}
      <View style={styles.carouselContainer}>
        <CarouselSlider
          ref={carouselRef}
          data={slideimage}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={500}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={slideimage.length}
          activeDotIndex={activeSlide}
          containerStyle={{
            // position: 'absolute',
            // bottom:0,
            // left: '35%',
          }}
          dotStyle={{
            width: 10,
            height: 10, borderRadius: 10,
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
          dotColor="green"
          inactiveDotColor="black"
        />
      </View>
    </View>
  );
};

export default SlidePost;
const styles = StyleSheet.create({

})

// import React,{useRef,useState} from 'react';
// import {View,Text, Dimensions, StyleSheet, Image} from 'react-native';
// import CarouselSlider, { Pagination } from 'react-native-snap-carousel';
// //import CarouselSlider from 'react-native-snap-carousel';
// import {CarouselData} from '../data/CarouselData';
// const sliderWidth = Dimensions.get('screen').width;
// const Carousel =()=>{
//     const carouselRef = useRef();
// const [activeSlide, setActiveSlide] = useState(0)
// const renderItem = ({item, index})=>{
//     return(
// <View style={styles.slide}>
//             <Image source={item.image} style={styles.imgStyle} resizeMode='contain' />
//         </View>
//     );
// };
//     return(
//         <View style={styles.carouselContainer}>
//             {/* <Text>Carousel</Text>                                         */}
//             <CarouselSlider
//               ref={carouselRef}
//               data={CarouselData}
//               renderItem={renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={500}
//               onSnapToItem={index => setActiveSlide(index)}
//             />
//               <Pagination
//               dotsLength={CarouselData.length}
//               activeDotIndex={activeSlide}
//               containerStyle={{
//                 position:'absolute',
//                 bottom:0,
//                 left:'15%',
//                }}
//               dotStyle={{
//                   width: 15,
//                   height: 15,
//                   borderRadius: 10,
//               }}
//               inactiveDotStyle={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: 5,
//               }}
//               inactiveDotOpacity={0.4}
//               inactiveDotScale={0.6}
//               dotColor="green"
//               inactiveDotColor="white"
//             />
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     carouselContainer:{
//  position:'relative'
//     },
//     imgStyle: {
//         height:230,
//         width:'74%',
//     //    marginLeft:8,
//     //    marginRight:250,
//     },
// })
// export default Carousel;