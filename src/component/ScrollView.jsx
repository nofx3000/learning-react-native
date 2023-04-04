import React, {useRef} from 'react';
import {StyleSheet, Button, ScrollView, Text, TextInput} from 'react-native';
export default () => {
  const viewRef = useRef(null);
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
      ref={viewRef}
      // ScrollView组件的style属性和contentContainerStyle属性的区别：
      // style属性用于设置ScrollView组件本身的样式，比如设置背景颜色、边框、宽高等属性。
      // contentContainerStyle属性用于设置ScrollView中的内容容器的样式，比如设置内边距、对齐方式等属性。这个属性通常用来控制ScrollView中子元素的布局，而不是ScrollView本身的样式。
      // 另外，需要注意的是，contentContainerStyle属性只适用于具有滚动内容的ScrollView组件，因为它用于控制ScrollView中子元素的布局。如果ScrollView中没有滚动内容，设置contentContainerStyle属性也没有任何效果。
      style={styles.root}
      contentContainerStyle={styles.container}
      keyboardDismissMode="none"
      // handled和never的区别在于当用户点击ScrollView中的非可滚动区域时，handled会保持键盘打开状态，
      // 而never会关闭键盘。如果您想要在ScrollView中包含可编辑的文本输入框，那么通常会使用handled来确保键盘保持打开状态，以便用户可以轻松地输入内容。
      keyboardShouldPersistTaps="handled"
      // 滚动松手的瞬间
      onMomentumScrollBegin={() => {
        console.log('onMomentumScrollBegin');
      }}
      onMomentumScrollEnd={() => {
        console.log('onMomentumScrollEnd');
      }}
      // 监听滚动时间
      onScroll={event => {
        console.log(event.nativeEvent.contentOffset.y);
      }}
      overScrollMode="never"
      scrollEnabled={true}
      // 初始滚动距离
      contentOffset={{y: 1000}}
      // 显示滚动条
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      // 设置吸顶元素
      stickyHeaderIndices={[1]}
      // 控制滚动方向
      //   horizontal={true}
      // 控制是否整页滚动，例如轮播
      //   pagingEnabled={true}
    >
      <TextInput></TextInput>
      <Button
        title="handled and never"
        onPress={() => {
          console.log('onPress...');
        }}></Button>
      {arrayList()}
      <Button
        title="scroll to 200"
        onPress={() => {
          viewRef.current.scrollTo({
            x: 0,
            y: 200,
          });
        }}></Button>
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
