import React from 'react';
import {StyleSheet, Button, ScrollView, Text, TextInput} from 'react-native';
export default () => {
  const arrayList = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(
        <Text key={i} style={styles.text}>
          {i}
        </Text>,
      );
    }
    return arr;
  };
  return (
    <ScrollView
      // ScrollView组件的style属性和contentContainerStyle属性的区别：
      // style属性用于设置ScrollView组件本身的样式，比如设置背景颜色、边框、宽高等属性。
      // contentContainerStyle属性用于设置ScrollView中的内容容器的样式，比如设置内边距、对齐方式等属性。这个属性通常用来控制ScrollView中子元素的布局，而不是ScrollView本身的样式。
      // 另外，需要注意的是，contentContainerStyle属性只适用于具有滚动内容的ScrollView组件，因为它用于控制ScrollView中子元素的布局。如果ScrollView中没有滚动内容，设置contentContainerStyle属性也没有任何效果。
      style={styles.root}
      contentContainerStyle={styles.container}
      keyboardDismissMode="none"
      keyboardShouldPersistTaps="handled">
      <TextInput></TextInput>
      <Button
        title="handled and never"
        onPress={() => {
          console.log('onPress...');
        }}></Button>
      {arrayList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 5,
  },
  text: {
    fontSize: 56,
    padding: 20,
  },
});
