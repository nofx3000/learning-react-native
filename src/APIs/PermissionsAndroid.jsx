import React from 'react';
import {StyleSheet, View, PermissionsAndroid, Button} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="PermissionsAndroid"
        onPress={() => {
          console.log(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
          // check返回promise
          PermissionsAndroid.check(
            'android.permission.WRITE_EXTERNAL_STORAGE',
          ).then(res => {
            console.log('---', res);
            if (!res) {
              // 需要在manifest中注册静态权限
              PermissionsAndroid.request(
                'android.permission.WRITE_EXTERNAL_STORAGE',
              ).then(status => console.log(status));

              // 申请多个 PermissionsAndroid.requestMultiple([...])
            }
          });
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
