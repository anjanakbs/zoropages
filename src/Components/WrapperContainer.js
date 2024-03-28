//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, useColorScheme, StatusBar } from 'react-native';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
import { moderateScale } from '../styles/responsiveSize';
// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
 
    return (
        <View style={{
            ...styles.container,
            ...style,
          
        }}>
            <StatusBar barStyle={ 'light-content' } />
            <SafeAreaView style={{ flex: 1,marginHorizontal:moderateScale(8) }}>
                {children}
            </SafeAreaView>
        </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//make this component available to the app
export default WrapperContainer;









