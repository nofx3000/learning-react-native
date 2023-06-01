import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  requireNativeComponent,
  ViewProps,
  findNodeHandle,
  UIManager,
} from 'react-native';

type NativeInfoViewType =
  | ViewProps
  | {
      avatar: string;
      name: string;
      desc: string;
      onShapeChange: (e: any) => void;
    };

const NativeInfoView =
  requireNativeComponent<NativeInfoViewType>('NativeInfoView');

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      sendCommand('setShape', ['round']);
    }, 3000);
  }, []);

  const sendCommand = (command: string, params: any[]) => {
    const viewId = findNodeHandle(ref.current);
    const commands = (UIManager as any).NativeInfoView.Commands[
      command
    ].toString();
    UIManager.dispatchViewManagerCommand(viewId, commands, params);
  };

  return (
    <NativeInfoView
      ref={ref}
      style={styles.root}
      name="kkk"
      desc="CCCCCCCCCCCCCC"
      onShapeChange={e => {
        console.log(e.nativeEvent.shape);
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});
