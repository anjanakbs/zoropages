import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import imagePath from '../../constants/imagePath'
import { textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'

const Addlink = () => {
  return (
    <View>
        <View style={styles.header}>
            <HeaderComp leftIcon={imagePath.backicon}/> 
            <Text style={styles.heading}>Links</Text>
        </View>
        <View style={styles.addlink}>
            <Image source={imagePath.plusicon} style={{height:45,width:45}}/>
            <Text style={styles.text}>Add external link</Text>
        </View>
        <View style={styles.viewline}>
                </View>
        <View style={styles.addlink}>
            <Image source={imagePath.facebook2} style={{height:45,width:45}}/>
            <Text style={styles.text}>Add Facebook Profile</Text>
        </View>
    </View>
  )
}

export default Addlink
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        marginHorizontal:10,
        marginTop:30,
        marginBottom:20
    },
    heading:{
        alignSelf:'center',
        marginLeft:30,
        fontSize:textScale(20),
        fontFamily:fontFamily.bold,
        color:colors.black
    },
    addlink:{
        flexDirection:'row',
        margin:10
    },
    text:{
        marginLeft:20,
        fontSize:textScale(17),
        fontFamily:fontFamily.bold,
        color:colors.black,
        alignSelf:'center'

    },
    viewline:{
        height:1,
        backgroundColor:colors.blackOpacity15,
        // marginTop:30
    }
})