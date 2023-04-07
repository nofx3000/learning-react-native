import React from 'react';
import {StyleSheet, View, PixelRatio, Button} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="PixelRatio"
        onPress={() => {
          console.log(PixelRatio.get());
          console.log(PixelRatio.getFontScale());
          console.log(PixelRatio.getPixelSizeForLayoutSize(200));
          // 为避免不满1的像素点累计行程像素空缺
          console.log(PixelRatio.roundToNearestPixel(35.1));
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
