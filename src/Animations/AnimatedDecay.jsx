// 支持动画的组件
// Animated.Image, Animated.View, Animated.ScrollView,
// Animated.FlatList, Animated.Text, Animated.SectionList

import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated} from 'react-native';
export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title="Animate"
        onPress={() => {
          Animated.decay(marginLeft, {
            // 初始速度
            velocity: 1,
            // 衰减速度
            deceleration: 0.997,
            useNativeDriver: false,
          }).start();
        }}></Button>
      <Animated.View style={[styles.animation, {marginLeft}]}></Animated.View>
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
