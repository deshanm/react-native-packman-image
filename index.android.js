/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 * https://twitter.com/deshatom
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PackMan from './components/PackMan';

export default class pacmanStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PackMan />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('pacmanStyle', () => pacmanStyle);
