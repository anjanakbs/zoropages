import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Video from 'react-native-video'

const VideoComponent = () => {
  return (
    <View>
      <Video source={{uri: "https://youtu.be/gvkqT_Uoahw?si=zE1p_Q7LdG2BaTnS"}}   
       ref={(ref) => {
         this.player = ref
       }}                                      
       onBuffer={this.onBuffer}               
       onError={this.videoError}               
       style={styles.backgroundVideo} 
    controls={true}
    />
    </View>
 )
}
export default VideoComponent;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
 