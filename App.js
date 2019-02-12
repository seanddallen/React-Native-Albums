import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header headerText={'Albums'} /> 
        <View style={styles.container}>
          <AlbumList />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
