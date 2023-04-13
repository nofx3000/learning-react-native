// 支持动画的组件
// Animated.Image, Animated.View, Animated.ScrollView,
// Animated.FlatList, Animated.Text, Animated.SectionList

import React, {useRef} from 'react';
import {StyleSheet, View, Button, Animated, Easing} from 'react-native';
export default () => {
  const marginLeft = useRef(new Animated.Value(0)).current;
  const marginTop = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const moveX = Animated.timing(marginLeft, {
    toValue: 500,
    duration: 1000,
    useNativeDriver: false,
  });
  const moveY = Animated.timing(marginTop, {
    toValue: 500,
    duration: 1000,
    useNativeDriver: false,
  });
  const scaleAnim = Animated.timing(scale, {
    toValue: 1.5,
    duration: 1000,
    useNativeDriver: false,
  });

  return (
    <View style={styles.root}>
      <Button
        title="Animate"
        onPress={() => {
          Animated.parallel([moveX, moveY, scaleAnim]).start();
          //   Animated.sequence([moveX, moveY, scaleAnim]).start();
          //   Animated.stagger(1500, [moveX, moveY, scaleAnim]).start();
          //   Animated.sequence([moveX, Animated.delay(500), moveY, Animated.delay(500),scaleAnim]).start();
        }}></Button>
      <Animated.View
        style={[
          styles.animation,
          {marginLeft, marginTop, transform: [{scale}]},
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
