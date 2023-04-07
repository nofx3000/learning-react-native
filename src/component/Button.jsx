import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="button"
        onPress={() => {
          console.log('pressed');
        }}></Button>
      <Button title="disabled" onPress={() => {}} disabled={true}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
});
