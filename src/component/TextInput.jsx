import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.text_input}
        // autoFocus={true}
        caretHidden={true}
        blurOnSubmit={false}
        defaultValue="defaultValue"
        keyboardType="number-pad"
        returnKeyType="previous"
        // multiline={true}
        onBlur={() => {}}
        onFocus={() => {}}
        onChange={e => {}}
        onChangeText={text => {}}
        selection={{start: 0, end: 3}}
        selectionColor="red"
        // conflict with autoFocus
        selectTextOnFocus={true}
        // conflict with multiline
        secureTextEntry={true}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  text_input: {
    width: '100%',
    height: 56,
    fontSize: 30,
    color: '#333333',
    backgroundColor: '#d0d0d0',
  },
});
