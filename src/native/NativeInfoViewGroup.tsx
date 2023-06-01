import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  requireNativeComponent,
  ViewProps,
  findNodeHandle,
  UIManager,
} from 'react-native';

type NativeInfoViewGroupType = ViewProps | {};

const NativeInfoViewGroup = requireNativeComponent<NativeInfoViewGroupType>(
  'NativeInfoViewGroup',
);

export default () => {
  return (
    <NativeInfoViewGroup style={styles.root}>
      <View style={{width: 200, height: 200, backgroundColor: 'red'}} />
    </NativeInfoViewGroup>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});
