import React, {useRef} from 'react';
import {StyleSheet, View, Keyboard, Button, Animated} from 'react-native';
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
