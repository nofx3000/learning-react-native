import React from 'react';
import {StyleSheet, View, Platform, Button} from 'react-native';
export default () => {
  const styles = {
    root: Platform.select({
      android: {
        marginTop: 20,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        marginTop: 10,
      },
    }),
  };

  return (
    <View style={styles.root}>
      <Button
        title="platform"
        onPress={() => {
          console.log(Platform.constants);
          console.log(Platform.OS);
          console.log(Platform.Version);
          console.log(Platform.isPad);
          console.log(Platform.isTV);
        }}></Button>
    </View>
  );
};
