import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  txt: {
    fontSize: 220,
  },
});
