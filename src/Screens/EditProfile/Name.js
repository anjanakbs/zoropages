import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import { textScale, width } from '../../styles/responsiveSize'

const Name = ({navigation}) => {
  return (
    <View>
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
        <Image source={imagePath.cancel}style={styles.cancelimage}/>
            <Text style={styles.heading}>Name</Text>
            </View>
            <Image source={imagePath.check}style={styles.checkimage}tintColor={colors.blue}/>
        </View>
        <View>
      <Text style={styles.textstyle}>Name</Text>
      <TextInput style={styles.input}/>
      </View>
      <Text style={styles.textstyle}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name</Text>
    </View>
  )
}
export default Name
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
input:{
    borderBottomWidth:1,
    margin:5
},
textstyle:{
    marginLeft:5,
    marginTop:15
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
})