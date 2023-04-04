import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icon_menu from '../assets/image/icon_menu.png';
import icon_share from '../assets/image/icon_share.png';
import avatar from '../assets/image/default_avatar.png';
import icon_add from '../assets/image/icon_add.png';

export default () => {
  return (
    <View style={styles.root}>
      <View style={styles.navi}>
        <TouchableOpacity
          onPress={() => {
            console.log('icon_menu is pressed');
          }}>
          <Image source={icon_menu} style={styles.icon_button}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('icon_menu is pressed');
          }}>
          <Image source={icon_share} style={styles.icon_button}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.status}>
        <ImageBackground
          style={styles.avatar}
          source={avatar}
          borderRadius={60}>
          <TouchableOpacity>
            <Image style={styles.avatar_button} source={icon_add}></Image>
          </TouchableOpacity>
        </ImageBackground>
        <Text>大公爵</Text>
        <Text>小红书号: 118302851</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#0c0c0c40',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 15,
  },
  icon_button: {
    height: 30,
    width: 30,
  },
  navi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: 'relative',
  },
  avatar_button: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 80,
    left: 80,
  },
  status: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
