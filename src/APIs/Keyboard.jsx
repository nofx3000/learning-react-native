import React, {useEffect} from 'react';
import {StyleSheet, View, Keyboard, Button, TextInput} from 'react-native';
export default () => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      console.log('keyboardDidShow');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboardDidHide');
    });
    return () => {
      Keyboard.removeSubscription('keyboardDidShow');
      Keyboard.removeSubscription('keyboardDidHide');
    };
  }, []);
  return (
    <View style={styles.root}>
      <Button
        title="hide_keyboard"
        onPress={() => {
          Keyboard.dismiss();
        }}></Button>
      <TextInput
        style={{height: 50, width: 100, backgroundColor: 'gray'}}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
