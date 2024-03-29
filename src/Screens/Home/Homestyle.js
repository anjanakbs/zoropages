import {StyleSheet} from 'react-native';
import {height, moderateScale, textScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  viewstyle:{
    backgroundColor:colors.grey
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    // marginTop: 17,
    marginRight: 15,
    flexDirection:'row',
  },
  tagview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  imageview: {
    // flexDirection: 'row',
    // justifyContent:'space-between'
    // position: 'absolute',
    // bottom: 4,
    marginTop:height/7.5
  },
  following:{
    marginTop:10,
    fontFamily:fontFamily.medium,
    fontSize:15,
   
  },
    
  text:{
    alignSelf:'center',
    paddingRight:width/2
  },
  comment: {
    // backgroundColor: '#D9D9D9',
    backgroundColor:colors.white,
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
  },
  relax: {
    color: colors.darkgreen,
    fontSize: textScale(22),
    fontFamily: fontFamily.bold,
  },
  travel: {
    color: colors.darkgreen,
    fontSize: textScale(22),
    fontFamily: fontFamily.bold,
  },
  imagebackground: {
    height: height / 4,
    width: width - 20,
    borderRadius: 10,
  },
  lastpost: {
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
    marginTop: 15,
  },
  likeimage: {
    height: 30,
    width: 30,
    // paddingLeft:20
    marginRight:25
  },
  likeview: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 14,
  },
  saveimage:{
    paddingLeft:width/2.5,
    // marginTop:10
  }
});

export default styles;