import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, textScale, width } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height/1.4,
  },
  overallview:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.white,
    // marginTop: 10,
    // marginBottom: 5,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex:1
  },
  textstyle: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
  iconstyle: {
    height: 25,
    width: 25,
    marginTop: 5,
    marginHorizontal: 10
  },
  viewicon:{
    height: 20,
    width: 20,
    marginTop: 5,
    marginHorizontal: 10
  },
  saveicon:{
    height: 21,
    width: 20,
    marginTop:10,
    marginHorizontal:10,
  },
  icontext: {
    marginTop: 7,
    // paddingLeft: 5,
    fontFamily: fontFamily.medium,
    marginRight:5
  },
  heading: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(15),
    marginTop: 10,
    color:colors.white
  },
  headerstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: colors.black
  },
  container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center'
	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20
	},
  Follow:{
    fontSize: textScale(18),
    marginTop: 15,
    textAlign: 'center',
    fontSize: textScale(14),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.black,
    height: 30,
    width: 90,
    paddingTop: 5,
    color: colors.black,
  }

});
export default styles
