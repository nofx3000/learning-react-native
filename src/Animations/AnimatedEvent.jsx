/**
 * 解决滑动跟随延迟
 */

import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
export default () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderList = () => {
    const colors = ['red', 'yellow', 'orange', 'green', 'blue'];
    const arr = new Array(20);
    for (let i = 0; i < 20; i++) {
      arr[i] = i;
    }
    return arr.map((item, index) => (
      <View
        style={{width: 50, height: 80, backgroundColor: colors[item % 5]}}
        key={index}></View>
    ));
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: Animated.multiply(-1, scrollY),
            },
          ],
        }}>
        <View>{renderList()}</View>
      </Animated.View>
      <Animated.ScrollView
        style={{
          height: '100%',
          marginLeft: 100,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        {renderList()}
      </Animated.ScrollView>
    </View>
  );
};
