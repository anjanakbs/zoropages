import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import fontFamily from '../../styles/fontFamily'

const UserName = ({navigation}) => {
  return (
    <View>
    <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
        <Image source={imagePath.cancel}style={styles.cancelimage}/>
            <Text style={styles.heading}>UserName</Text>
            </View>
            <Image source={imagePath.check}style={styles.checkimage}tintColor={colors.blue}/>
        </View>
    <View>
  <Text style={styles.textstyle}>UserName</Text>
  <TextInput style={styles.input}/>
  </View>
  <Text style={styles.textstyle}>You can change your UserName within 20 days</Text>
</View>
  )
}

export default UserName
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