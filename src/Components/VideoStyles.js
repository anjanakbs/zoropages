import {StyleSheet} from 'react-native';
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
    width: width,
    height: height / 1.3,
    marginTop: 10,
  },
  imagepostview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.white,
    height: height / 1.2,
    width: width,
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
    height: height / 1+90,
    width: width,
    marginBottom: 10,
    marginBottom: 10,
  },
  imageview: {
    // flex:1,
    flexDirection: 'row',
    marginBottom: moderateScale(5),
    justifyContent:'space-between',
   
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
    height: 30,
    width: 30,
    marginLeft: 10,
    tintColor: colors.darkgreen,
  },
  menuicon: {
    height: 18,
     width: 20, 
     marginTop: 13
    },
  saveicon: {
    height: 28,
    width: 28,
    tintColor: colors.darkgreen,
    marginLeft: width / 1.7,
  },
});
export default styles;
