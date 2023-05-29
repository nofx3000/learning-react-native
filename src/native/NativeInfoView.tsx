import React from 'react';
import {
  View,
  StyleSheet,
  requireNativeComponent,
  ViewProps,
} from 'react-native';

type NativeInfoViewType = ViewProps & {};

const NativeInfoView =
  requireNativeComponent<NativeInfoViewType>('NativeInfoView');

export default () => {
  return <NativeInfoView style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});
