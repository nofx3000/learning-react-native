import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>fontSize</Text>
      <Text selectable>selectable</Text>
      <Text ellipsizeMode="tail" numberOfLines={1}>
        ellipsizeModeellipsizeModeellipsizeModeellipsizeModeellipsizeModeellipsizeMode
      </Text>
      <Text
        onLongPress={() => {
          console.log('onLongPress');
        }}>
        onLongPress
      </Text>
      <Text
        onPress={() => {
          console.log('onPress');
        }}>
        onPress
      </Text>
      <Text allowFontScaling={true}>allowFontScaling</Text>
      <Text
        style={{
          margin: 20,
          padding: 20,
        }}>
        Text nest cannot set{' '}
        <Text
          style={{
            margin: 20,
            padding: 20,
          }}>
          margin, padding, textAlign and textAlignVertical
        </Text>
      </Text>
      <Text
        style={{
          textDecorationStyle: 'solid',
          textDecorationLine: 'underline',
          // textDecorationColor: '#111111',
        }}>
        textDecoration
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  txt: {
    fontSize: 20,
  },
});
