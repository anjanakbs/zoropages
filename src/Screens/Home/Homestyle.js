import {StyleSheet} from 'react-native';
import {
  height,
  moderateScale,
  textScale,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  view1: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 20,
  },
  viewstyle: {
    backgroundColor: colors.grey,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    marginRight: 15,
    flexDirection: 'row',
  },
  tagview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  follow: {
    fontSize: textScale(18),
    marginTop: 10,
       marginRight:25,
       textAlign: 'center',
       fontSize: textScale(14),
       borderWidth: 1,
       borderRadius: 10,
       borderColor: colors.lightgrey,
       height: 30,
       width: 90,
       paddingTop: 5,
       color: colors.black,
       backgroundColor:colors.lightgrey
  },
  imageview: {
    flexDirection: 'row',
    marginBottom:moderateScale(5)
  },
  following: {
    marginTop: 15,
    fontFamily: fontFamily.medium,
    fontSize: 15,
  },

  text: {
    alignSelf: 'center',
    paddingRight: width / 2,
  },
  comment: {
    backgroundColor: colors.white,
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
    color: colors.theme,
    fontSize: textScale(22),
    fontFamily: fontFamily.bold,
  },
  imagebackground: {
    height: height / 4,
    width: width - 20,
    borderRadius: 20,
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
    marginRight: 25,
  },
  likeview: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    marginTop: 10,
  },
  saveimage: {
    paddingLeft: width / 2.5,
  },
});

export default styles;
