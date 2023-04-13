// 支持动画的组件
// Animated.Image, Animated.View, Animated.ScrollView,
// Animated.FlatList, Animated.Text, Animated.SectionList

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Button,
  Text,
  Image,
} from 'react-native';

import icon_home from '../assets/image/icon_home.png';

const bars = [
  {
    title: 'home',
    icon: 'aaa',
    index: 0,
  },
  {
    title: 'home',
    icon: 'aaa',
    index: 1,
  },
  {
    title: 'home',
    icon: 'aaa',
    index: 2,
  },
  {
    title: 'home',
    icon: 'aaa',
    index: 3,
  },
];

export default () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const setIndex = idx => {
    setCurrentIndex(idx);
  };
  const renderBars = () => {
    return bars.map((item, index) => {
      return (
        <Bar
          setIndex={idx => {
            setIndex(idx);
          }}
          isActivated={currentIndex === item.index}
          key={index}
          index={item.index}
          title={item.title}></Bar>
      );
    });
  };
  return <View style={styles.root}>{renderBars()}</View>;
};

const Bar = ({isActivated, title, index, setIndex}) => {
  const transValue = useRef(new Animated.Value(isActivated ? 0 : -200)).current;
  const opacityValue = useRef(
    new Animated.Value(isActivated ? 1 : 0.5),
  ).current;
  const textShow = useRef(new Animated.Value(isActivated ? 1 : 0)).current;
  useEffect(() => {
    const transAnim = Animated.timing(transValue, {
      toValue: isActivated ? 0 : -200,
      duration: 200,
      useNativeDriver: false,
    });
    const opacAnim = Animated.timing(opacityValue, {
      toValue: isActivated ? 1 : 0.5,
      duration: 200,
      useNativeDriver: false,
    });
    const textAnim = Animated.timing(textShow, {
      toValue: isActivated ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    });
    Animated.parallel([transAnim, opacAnim, textAnim]).start();
  }, [isActivated]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '25%',
        position: 'relative',
        marginBottom: 30,
      }}
      onPress={() => {
        if (isActivated) {
          setIndex(null);
          return;
        }
        setIndex(index);
        // const transAnim = Animated.timing(transValue, {
        //   toValue: 0,
        //   duration: 200,
        //   useNativeDriver: false,
        // });
        // const opacAnim = Animated.timing(opacityValue, {
        //   toValue: 0.5,
        //   duration: 200,
        //   useNativeDriver: false,
        // });
        // Animated.parallel([transAnim, opacAnim]).start();
      }}>
      <Animated.View
        style={{
          opacity: opacityValue,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="clip"
          style={[styles.text, {opacity: 0.5}]}>
          aaaasss
        </Text>
        <Animated.Image
          source={icon_home}
          style={[styles.icon]}></Animated.Image>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                {
                  translateX: transValue,
                },
              ],
            },
          ]}></Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bar: {
    height: 80,
    width: 300,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'blue',
  },
  icon: {
    tintColor: 'black',
    position: 'absolute',
    left: 10,
    zIndex: 99,
  },
  text: {
    position: 'absolute',
    fontSize: 28,
    color: 'black',
    marginLeft: 100,
    zIndex: 100,
  },
});
