import React from 'react';
import {StyleSheet, View, Linking, Button} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="Linking.openURL"
        onPress={() => {
          if (Linking.canOpenURL('http://www.baidu.com')) {
            Linking.openURL('http://www.baidu.com');
          }
          Linking.openURL('geo: 37.212, 12.222');
          Linking.openURL('tel: 10086');
          Linking.openURL('smsto: 10086');
          Linking.openURL('mailto: 10086');
          Linking.openURL('mailto: 10086@qq.com');
        }}></Button>
      <Button
        title="Linking.openSettings"
        onPress={() => {
          Linking.openSettings();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
