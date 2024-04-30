import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'

const Gender = () => {
  return (
    <View>
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
        <Image source={imagePath.cancel}style={styles.cancelimage}/>
            <Text style={styles.heading}>Gender</Text>
            </View>
            <Image source={imagePath.check}style={styles.checkimage}tintColor={colors.blue}/>
        </View>
        <Text style={styles.textheading}> This won't be part of your public profile</Text>
        <View style={styles.textview}>
            <Text style={styles.femaletext}>Female</Text>
            <Image source={imagePath.radiobutton}style={{height:30,width:30}}/>
        </View>
        <View style={styles.textview}>
            <Text style={styles.femaletext}>Male</Text>
            <Image source={imagePath.radiobutton}style={{height:30,width:30}}/>
        </View>
        <View style={styles.textview}>
            <Text style={styles.femaletext}>Custom</Text>
            <Image source={imagePath.radiobutton}style={{height:30,width:30}}/>
        </View>
        <View style={styles.textview}>
            <Text style={styles.femaletext}>prefer not to say</Text>
            <Image source={imagePath.radiobutton}style={{height:30,width:30}}/>
        </View>
    </View>
  )
}
export default Gender
const styles = StyleSheet.create({
heading:{
    alignSelf:'center',
    fontFamily:fontFamily.bold,
    fontSize:textScale(20),
    color:colors.black
},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    marginBottom:20,
    marginRight:10
},
cancelimage:{
    height:30,
    width:30,
    marginHorizontal:20
},
checkimage:{
    height:30,
    width:30,
    
},
input:{
    borderBottomWidth:1,
    margin:5
},
textstyle:{
    marginLeft:5,
    marginTop:15
},
textheading:{
    marginLeft:15
},
femaletext:{
    color:colors.black,
    fontSize:textScale(16)
},
textview:{
    marginTop:30,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
}
})