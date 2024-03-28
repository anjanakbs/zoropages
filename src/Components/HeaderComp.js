import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScaleVertical } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';
// create a component
const HeaderComp = ({
    onPressLeft,
    leftIcon,
}) => {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            {leftIcon&&<TouchableOpacity onPress={!!onPressLeft ?onPressLeft:()=>navigation.goBack()}>
                <Image style={{ tintColor: colors.black,}} source={imagePath.backicon} />
            </TouchableOpacity>}
        </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScaleVertical(42),
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: moderateScaleVertical(16)
    },
});
//make this component available to the app
export default HeaderComp;







