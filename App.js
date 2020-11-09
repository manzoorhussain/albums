/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,ScrollView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App=()=> {
  return (
    <View>
  <Header headerText="Albums"/>
  <ScrollView>
  <AlbumList/>
  </ScrollView>
  </View>
  );
};



export default App;
