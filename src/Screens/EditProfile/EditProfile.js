import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import colors from '../../styles/colors'
import { height, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'

const EditProfile = ({ navigation }) => {
    return (
        <WrapperContainer>
        <View>
            <View style={styles.header}>
                {/* <Image source={imagePath.cancel}style={{height:30,width:30}}/> */}
                <HeaderComp leftIcon={imagePath.backicon}/>
            <Text style={styles.heading}>EditProfile</Text>
            {/* <Image source={imagePath.check}style={{height:30,width:30}}tintColor={colors.blue}/> */}
            </View>
            <View style={{flexDirection:"row",alignSelf:'center',marginBottom:20}}>
                <Image source={imagePath.modal} style={{height:80,width:80,borderRadius:50,alignSelf:'center',marginRight:10}}/>
                <Image source={imagePath.avatar} style={{height:80,width:80,borderRadius:50,alignSelf:'center'}}/>
            </View>
            <Text style={styles.text}>Edit picture or avatar</Text>
            <View>
                <Text onPress={()=>navigation.navigate('Name')}>Name</Text>
                <View style={styles.viewline}>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text onPress={()=>navigation.navigate('UserName')}>UserName</Text>
                <View style={styles.viewline}>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text onPress={()=>navigation.navigate('Pronouns')}>Pronouns</Text>
                <View style={styles.viewline}>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text onPress={()=>navigation.navigate('Bio')}>bio</Text>
                <View style={styles.viewline}>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text onPress={()=>navigation.navigate('Addlink')} style={styles.addlink}>Add link</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text onPress={()=>navigation.navigate('Gender')}>Gender</Text>
                <View style={styles.viewline}>
                </View>
            </View>
        </View>
        </WrapperContainer>
    )
}
export default EditProfile
const styles= StyleSheet.create({
    heading:{
        alignSelf:'center',
        fontFamily:fontFamily.bold,
        fontSize:textScale(20),
        color:colors.black,
        marginLeft:30
    },
    header:{
        flexDirection:'row',
        // justifyContent:'space-evenly',
        marginTop:20,
        marginBottom:20,
    },
    text:{
        alignSelf:'center',
        color:colors.blue,
        fontSize:textScale(15),
        marginBottom:20
    },
    viewline:{
        height:1,
        backgroundColor:colors.black,
        marginTop:30
    },
    addlink:{
        color:colors.black,
        fontSize:textScale(18)
    }
    
})