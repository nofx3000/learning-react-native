import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

import bg_card from '../assets/image/bg_card.png';
import icon_logo from '../assets/image/icon_bank.png';

export default () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={bg_card} style={styles.viewStyle}>
        <Image source={icon_logo} style={styles.icon_logo}></Image>
        <Text style={styles.text_bank}>
          {`招商银行\n`}
          <Text>储蓄卡</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  viewStyle: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
  },
  icon_logo: {
    width: 48,
    height: 48,
    marginLeft: 20,
    marginTop: 20,
  },
  text_bank: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
    marginTop: 21,
    fontWeight: 'bold',
  },
});
