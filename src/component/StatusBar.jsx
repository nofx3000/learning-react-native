import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import SectionList from './SectionList';
export default () => {
  const barRef = useRef(null);
  //   useEffect(() => {
  //     barRef.current.setBackgroundColor();
  //     barRef.current.setBarStyle();
  //     barRef.current.setHidden();
  //     barRef.current.setTranslucent();
  //   }, []);
  return (
    <View style={styles.root}>
      <StatusBar
        ref={barRef}
        // 内容和图标，不是背景色
        barStyle="dark-content"
        backgroundColor="#30303060"
        animated={true}
        // true 时状态栏就悬浮，内容从状态栏顶部算起
        translucent={true}
        hidden={false}></StatusBar>
      <SectionList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
});
