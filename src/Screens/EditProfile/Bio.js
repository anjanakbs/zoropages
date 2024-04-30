import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'

const Bio = () => {
  return (
    <View>
     <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
        <Image source={imagePath.cancel}style={styles.cancelimage}/>
            <Text style={styles.heading}>Bio</Text>
            </View>
            <Image source={imagePath.check}style={styles.checkimage}tintColor={colors.blue}/>
        </View>
        <View>
      <Text style={styles.textstyle}>Bio</Text>
      <TextInput style={styles.input}/>
      </View>
      </View>
  )
}
        
export default Bio
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
        borderWidth:1,
        height:100,
        borderRadius:20,
        margin:5
    },
    textstyle:{
        marginLeft:10,
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