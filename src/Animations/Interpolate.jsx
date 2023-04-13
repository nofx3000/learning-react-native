import React, {useRef} from 'react';
import {StyleSheet, View, Keyboard, Button, Animated} from 'react-native';
export default () => {
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateValue = rotate.interpolate({
    inputRange: [0, 30],
    outputRange: ['0deg', '30deg'],
  });
  return (
    <View style={styles.root}>
      <Button
        title="Rotate"
        onPress={() => {
          Animated.timing(rotate, {
            toValue: 30,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}></Button>
      <Animated.View
        style={[
          styles.animation,
          {transform: [{rotate: rotateValue}]},
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
