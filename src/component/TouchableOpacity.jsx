import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        // x~1不透明度变化范围
        activeOpacity={0.5}
        onPress={() => {}}
        onLongPress={() => {}}
        // 算做长按的时间
        delayLongPress={2000}
        onPressIn={() => {
          console.log('press in');
        }}
        onPressOut={() => {
          console.log('press out');
        }}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#c3c3c3',
  },
});
