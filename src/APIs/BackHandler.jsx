/**
 * 针对安卓
 */
import React, {useEffect} from 'react';
import {StyleSheet, View, BackHandler, Button} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';

export default () => {
  useBackHandler(() => {
    // 代替BackHandler.addEventListener('hardwareBackPress', fn ）
    return true;
  });
  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', backForAndroid);
    // return () => {
    //   BackHandler.removeEventListener(backForAndroid);
    // };
  }, []);

  const backForAndroid = () => {
    // true 拦截返回键事件
    // false 放行返回键事件
    return true;
  };
  return (
    <View style={styles.root}>
      <Button
        title="exit_app"
        onPress={() => {
          // 直接退出app
          BackHandler.exitApp();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
