import React, {useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';
export default () => {
  const [value, setValue] = useState(false);
  return (
    <View style={styles.root}>
      <Switch
        value={value}
        onValueChange={_value => {
          console.log(_value);
          setValue(_value);
        }}
        // 状态背景颜色
        trackColor={{
          true: 'red',
          false: 'gray',
        }}
        // 前景颜色
        thumbColor="blue"></Switch>
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
