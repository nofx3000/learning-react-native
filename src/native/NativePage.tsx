import React from 'react';
import {View, StyleSheet, Button, NativeModules} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="调用原生方法_相册"
        onPress={() => {
          const {App} = NativeModules;
          App?.openGallery();
        }}></Button>
      <Button
        title="调用原生方法_常量"
        onPress={() => {
          const {App} = NativeModules;
          const {versionName, versionCode} = App;
          console.log('versionName:', versionName);
          console.log('versionCode:', versionCode);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
