// 支持动画的组件
// Animated.Image, Animated.View, Animated.ScrollView,
// Animated.FlatList, Animated.Text, Animated.SectionList

import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated, Easing} from 'react-native';
export default () => {
  const vector = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  return (
    <View style={styles.root}>
      <Button
        title="Animate"
        onPress={() => {
          Animated.timing(vector, {
            toValue: {x: 300, y: 400},
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}></Button>
      <Animated.View
        style={[
          styles.animation,
          {marginLeft: vector.x, marginTop: vector.y},
        ]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  animation: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
  },
});
