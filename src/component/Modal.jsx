import React, {useState} from 'react';
import {StyleSheet, View, Modal, Button} from 'react-native';
import SectionList from './SectionList';
export default () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <View style={styles.root}>
      <Button title="showModal" onPress={showModal}></Button>
      <Modal
        visible={visible}
        onRequestClose={hideModal}
        transparent={true}
        // false 将截止到statusBar下方，true 将覆盖statusBar
        statusBarTranslucent={true}
        animationType="slide"
        onShow={() => {
          console.log('onShow');
        }}
        // 截止这版代码，此回调无效
        onDismiss={() => {
          console.log('onDismiss');
        }}>
        <SectionList></SectionList>
      </Modal>
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
