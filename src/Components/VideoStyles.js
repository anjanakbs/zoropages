import { StyleSheet } from 'react-native';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  video: {
    height: height / 1.6,
    width: width,
    // margin: 10,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  imagepostview: {
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    // elevation: 2,
    // backgroundColor: colors.white,
    // marginTop:2,
    // marginBottom: 2,
  },
  videopostview: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
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
    fontSize: textScale(17),
    fontFamily: fontFamily.bold,
    color: colors.darkgreen,
    // paddingTop:5,
    paddingLeft: 9
  },
  description: {
    fontSize: textScale(15),
    fontFamily: fontFamily.regular,
    textAlign: 'left',
    paddingLeft: 9

  },
  Comment: {
    fontSize: moderateScale(15),
    fontFamily: fontFamily.medium,
    marginTop: 5,
    marginHorizontal: 8,
    textAlign: 'left'
  },
  author: {
    fontSize: moderateScale(20),
    fontFamily: fontFamily.bold,
    marginTop: 8,
    paddingLeft: 5,
  },
  postdate: {
    paddingLeft: 5,
    marginTop: 17,

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
    borderRadius: 8,
    borderColor: colors.black,
    height: 30,
    width: 90,
    paddingTop: 5,
    color: colors.black,
    marginLeft: 10
    // backgroundColor: colors.darkgreen,
  },
  videofollow: {
    flexDirection: 'row',
  },
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 9,
    marginTop: 9,
  },
  menuicon: {
    height: 20,
    width: 20,
    marginTop: 13,
  },
  saveicon: {
    height: 25,
    width: 25,
    marginTop: 12,
    // margin:9
    // marginRight: 10,
    // marginLeft:5
    marginHorizontal: 10
  },
  mainView: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // margin: 5
  },
  image: {
    marginRight: 15,
    flexDirection: 'row',
  },
  likecount: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(15),
    marginBottom:5
  },
  textinputstyle: {
    height: 40,
    width: width / 1.2,
    paddingLeft: 10,
    // marginTop:5
  },
  iconview: {
    marginBottom: 10,
    marginTop: 8,
    marginLeft:7
  },
  viewallcomment:{

  },
  uploadTime:{
    marginLeft:8
  },
  Sponsored:{
    // color:colors.black,
    marginLeft:6
  }
});
export default styles;