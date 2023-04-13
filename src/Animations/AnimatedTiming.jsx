// 支持动画的组件
// Animated.Image, Animated.View, Animated.ScrollView,
// Animated.FlatList, Animated.Text, Animated.SectionList

import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated, Easing} from 'react-native';
export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title="Animate"
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false,
            // 4种内置动画：
            // easing: Easing.back(3),
            // easing: Easing.ease,
            // easing: Easing.bounce,
            // easing: Easing.elastic(3),

            // 3种标准函数：
            // easing: Easing.linear,
            // easing: Easing.quad,
            // easing: Easing.cubic,

            // 4种补充函数：
            // easing: Easing.bezier(0.7, 0.2, 0.42, 0.82),
            // easing: Easing.circle,
            // easing: Easing.sin,
            // easing: Easing.exp,

            // 3种组合函数：
            // easing: Easing.in(...),
            // easing: Easing.out(...),
            // easing: Easing.inOut(...),
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
