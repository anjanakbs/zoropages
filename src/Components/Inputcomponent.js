import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, } from 'react-native';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const Inputcomponent
    = ({
        value,
        onChangeText,
        placeholder,
        placeholderTextColor,
        inputStyle,
        label,
         extraStyle={},
         lefticon,
         righticon,
         width,
         height,
         onFocus,
        ...props
    }) => {
        return (
            <View style={{...extraStyle}}>
                <Text style={styles.labelText}>{label}</Text>
                {lefticon && <Image source={lefticon} style={{position:'absolute',bottom:9,left:28}}/>}
                <TextInput
                    style={{ ...styles.inputStyle }}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={onFocus}
                    {...props}
                />
                 {righticon && <Image source={righticon} />}
            </View>
        )
    }
const styles = StyleSheet.create({
    inputStyle: {
        // ...commonStyles.fontSize14,
        // backgroundColor: colors.whiteColor,
        // borderRadius:10,
        // height: moderateScale(40),
        // paddingHorizontal: moderateScale(28),
        // // marginBottom: moderateScaleVertical(16),
        // borderWidth: 1,
        // borderColor: colors.grey,
        // alignItems: 'center',
    },
    labelText: {
        ...commonStyles.fontSize10,
        fontFamily: fontFamily.medium,
        // marginBottom: moderateScaleVertical(24),
        // textTransform:'uppercase'
    }
});


export default Inputcomponent

