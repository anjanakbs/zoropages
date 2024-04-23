import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import colors from '../../styles/colors'
import { height, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'

const EditProfile = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Image source={imagePath.cancel}style={{height:30,width:30}}/>
            <Text style={styles.heading}>EditProfile</Text>
            <Image source={imagePath.check}style={{height:30,width:30}}tintColor={colors.blue}/>
            </View>
            <View style={{flexDirection:"row",alignSelf:'center',marginBottom:20}}>
                <Image source={imagePath.modal} style={{height:80,width:80,borderRadius:50,alignSelf:'center',marginRight:10}}/>
                <Image source={imagePath.modal} style={{height:80,width:80,borderRadius:50,alignSelf:'center'}}/>
            </View>
            <Text style={styles.text}>Edit picture or avatar</Text>
            
        </View>
    )
}
export default EditProfile
const styles= StyleSheet.create({
    heading:{
        alignSelf:'center',
        fontFamily:fontFamily.bold,
        fontSize:textScale(20),
        color:colors.black
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20,
        marginBottom:20
    },
    text:{
        alignSelf:'center',
        color:colors.blue,
        fontSize:textScale(15),
        marginBottom:20
    }
})