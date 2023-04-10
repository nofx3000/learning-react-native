import React from 'react';
import {StyleSheet, View, Vibration, Button} from 'react-native';
export default () => {
  return (
    <View style={styles.root}>
      <Button
        title="Vibration"
        onPress={() => {
          Vibration.vibrate();
          Vibration.cancel();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
