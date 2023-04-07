/**
 * 对比总结：
 * 1. 注意组件的拆分，例如分成Dashboard，Content，Modal
 * 2. 善用flexGrow: 1来填充剩余空间
 * 3. 减少不必要的嵌套，比如过多的View
 * 4. 可以用flex: 1填充中间
 * 5. 不必要的View可以用空标签代替
 */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  //   SectionList,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import icon_menu from '../assets/image/icon_menu.png';
import icon_share from '../assets/image/icon_share.png';
import avatar from '../assets/image/default_avatar.png';
import icon_add from '../assets/image/icon_add.png';
import icon_gender from '../assets/image/icon_male.png';
import icon_setting from '../assets/image/icon_setting.png';
import SectionList from '../component/SectionList';

const ModalList = ({visible, hide}) => {
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: 'tranparent',
    },
    header: {
      height: '20%',
      width: '100%',
    },
    body: {
      width: '100%',
      backgroundColor: 'red',
      flexGrow: 1,
    },
  });
  return (
    <Modal
      style={styles.root}
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        hide();
      }}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <SectionList></SectionList>
      </View>
    </Modal>
  );
};

export default () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('share');

  const hide = () => {
    setVisible(false);
  };

  const renderContent = content_name => {
    if (content_name === 'share') {
      return <Text>share</Text>;
    } else if (content_name === 'collection') {
      return <Text>collection</Text>;
    } else {
      return <Text>thumb up</Text>;
    }
  };
  return (
    <View style={styles.root}>
      <ModalList visible={visible} hide={hide}></ModalList>
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
      <View style={styles.info}>
        <View style={styles.status}>
          <ImageBackground
            style={styles.avatar}
            source={avatar}
            borderRadius={60}>
            <TouchableOpacity>
              <Image style={styles.avatar_button} source={icon_add}></Image>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.userinfo}>
            <Text style={styles.userinfo_username}>大公爵</Text>
            <Text style={styles.userinfo_id}>小红书号: 118302851</Text>
          </View>
        </View>
        <View>
          <Text style={styles.introduction}>点击关注，填写简介</Text>
        </View>
        <View style={styles.icon_gender_background}>
          <Image
            source={icon_gender}
            style={styles.icon_gender}
            resizeMode="contain"></Image>
        </View>
        <View style={styles.data_eidt}>
          <View style={styles.data_eidt_left}>
            <TouchableOpacity
              style={styles.fans_fans_collections}
              onPress={() => {
                setVisible(true);
              }}>
              <Text>142</Text>
              <Text>关注</Text>
            </TouchableOpacity>
            <View style={styles.fans_fans_collections}>
              <Text>2098</Text>
              <Text>粉丝</Text>
            </View>
            <View style={styles.fans_fans_collections}>
              <Text>1042</Text>
              <Text>获赞与收藏</Text>
            </View>
          </View>
          <View style={styles.data_eidt_right}>
            <TouchableOpacity style={styles.setting_button}>
              <Text>编辑资料</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setting_button}>
              <Image source={icon_setting} style={styles.icon_setting}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => {
              console.log('笔记');
            }}>
            <Text style={styles.tab_button}>笔记</Text>
          </TouchableOpacity>
          <Text
            style={styles.tab_button}
            onPress={() => {
              console.log('收藏');
            }}>
            收藏
          </Text>
          <Text
            style={styles.tab_button}
            onPress={() => {
              console.log('赞过');
            }}>
            赞过
          </Text>
        </View>
        <View style={styles.content_area}>
          <Text>{renderContent()}</Text>
        </View>
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
    // padding: 15,
  },
  icon_button: {
    height: 30,
    width: 30,
  },
  info: {
    paddingHorizontal: 10,
  },
  navi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  userinfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  userinfo_username: {
    fontWeight: '800',
    fontSize: 36,
  },
  userinfo_id: {
    fontWeight: '400',
    fontSize: 20,
  },
  introduction: {
    paddingTop: 10,
    fontWeight: '400',
    fontSize: 20,
  },
  icon_gender_background: {
    marginTop: 10,
    height: 20,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  icon_gender: {
    height: 15,
    width: 15,
  },
  data_eidt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  data_eidt_left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  data_eidt_right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fans_fans_collections: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  setting_button: {
    height: 40,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  icon_setting: {
    height: 30,
    width: 30,
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  tab_button: {
    fontSize: 20,
    fontWeight: 400,
    marginHorizontal: 10,
  },
  content_area: {},
});
