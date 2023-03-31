import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';

import avatar from '../assets/image/avatar.png';
import icon from '../assets/image/icon_setting.png';
const imageUri = 'https://profile-avatar.csdnimg.cn/default.jpg!1';

export default () => {
  const imageRef = useRef(null);
  useEffect(() => {
    Image.getSize(
      'https://profile-avatar.csdnimg.cn/default.jpg!1',
      (width, height) => {
        console.log('Log in getSize: width:', width, 'height:', height);
      },
      err => {
        console.log('Log in getSize: ', err);
      },
    );
    Image.prefetch('https://profile-avatar.csdnimg.cn/default.jpg!1')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log('Log in prefetch:', err);
      });
  });
  return (
    <ScrollView style={styles.root}>
      <Text>LocalImage</Text>
      <Image source={avatar} style={styles.img}></Image>
      <Image
        source={{
          uri: imageUri,
        }}></Image>
      <Text>DefaultSource(debug env is not available)</Text>
      <Image
        source={{uri: '11111'}}
        defaultSource={avatar}
        style={styles.img}></Image>
      <Text>onLoad and onError</Text>

      <Image
        source={avatar}
        style={styles.img}
        onLoad={e => {
          console.log('onLoad', e.nativeEvent);
        }}></Image>
      <Image
        source={{uri: '1111'}}
        style={styles.img}
        onError={() => {
          console.log('onError');
        }}></Image>

      <Text>onLoadStart and onLoadEnd</Text>
      <Image
        source={avatar}
        style={styles.img}
        onLoadStart={e => {
          console.log('onLoadStart', e.nativeEvent);
        }}
        onLoadEnd={e => {
          console.log('onLoadEnd', e.nativeEvent);
        }}></Image>
      <Text>TiniColor</Text>
      <Image
        source={icon}
        style={{
          tintColor: 'red',
        }}></Image>
      <Text>API</Text>
      <Image ref={imageRef} source={avatar} style={styles.img}></Image>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  img: {
    width: 160,
    height: 120,
    resizeMode: 'cover',
    backgroundColor: 'yellow',
  },
});
