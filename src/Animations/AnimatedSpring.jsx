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
          Animated.spring(marginLeft, {
            toValue: 200,
            useNativeDriver: false,
            // 基础弹性模型(三选一进行配置）：
            // 1. bounciness(8) + speed(12)
            // 2. tension(40) + friction(7)
            // 3. stiffness(100) + damping(10) + mass(1)
            // 其他弹性参数：
            // velocity(0)
            // overshootClamping(false)：过冲，弹簧是否加紧而不应弹跳
            // restDisplacementThreshold(0.001)：恢复位移阈值，从静止状态开始的位移阈值，低于该阈值，弹簧应被视为静止
            // restspeedthreshold(0.001): 弹簧静止速度
            // delay(0)
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
