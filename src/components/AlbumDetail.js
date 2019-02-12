import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (    
        <Text>{props.album.title}</Text>
    );
};

export default AlbumDetail; 
