import {StyleSheet} from 'react-native';
import {height, textScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 17,
    marginRight: 15,
  },
  tagview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  imageview: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
  },
  comment: {
    backgroundColor: '#D9D9D9',
    height: height / 5,
    width: width - 20,
    borderRadius: 10,
  },
  relax: {
    color: colors.theme,
    fontSize: textScale(25),
    fontFamily: fontFamily.medium,
  },
  travel: {
    color: colors.theme,
    fontSize: textScale(25),
    fontFamily: fontFamily.medium,
  },
  imagebackground: {
    height: height / 5,
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
  },
  likeview: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
});

export default styles;
