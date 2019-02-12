/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles; 

    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    textStyle: {
        fontSize: 36
    },
    viewStyle: {
        backgroundColor: '#d5d5d5', 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 25,
        elevation: 2,
        position: 'relative',
        // shadowColor: '#000',
        // shadowOpacity: 0.2,
        // shadowOffset: { width: 0, height: 100 }
    }
}

export default Header; 

