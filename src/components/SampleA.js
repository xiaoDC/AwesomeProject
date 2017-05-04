import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <Text style={styles.add}>
        This is my own component 111111!!!!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MyComponent;
