/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    state = {
        albums: []
    }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    // renderAlbums = () => {
    //     return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />); 
    // }

    render() {
        const albumList = this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);

        return (
            <View>
                {/* <Text>{this.renderAlbums()}</Text> */}
                { albumList }
            </View>
        );
    }
}

export default AlbumList; 