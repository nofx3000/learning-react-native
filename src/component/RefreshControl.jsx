import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  RefreshControl,
} from 'react-native';
export default () => {
  const [refreshing, setRefreshing] = useState(false);

  const sectionData = [
    {type: 'A', data: ['a', 'aa', 'aaa']},
    {
      type: 'B',
      data: ['b', 'bb', 'bbb'],
    },
    {
      type: 'C',
      data: ['c', 'cc', 'ccc'],
    },
    {
      type: 'D',
      data: ['d', 'dd', 'ddd'],
    },
  ];

  const renderItem = ({item, index, section}) => {
    return <Text style={styles.text}>{item}</Text>;
  };

  const keyExtractorFunc = (item, index) => {
    return `${item}--${index}`;
  };

  const renderSectionHeader = ({section}) => {
    return <Text style={styles.sectionHeaderText}>{section.type}</Text>;
  };
  return (
    <SectionList
      // 下拉刷新
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              console.log('onRefresh');
              setRefreshing(false);
            }, 2000);
          }}></RefreshControl>
      }
      // 上拉加载
      onEndReached={() => {
        console.log('onEndReached');
      }}
      // 0--1表示加载出发位置
      onEndReachedThreshold={0.2}
      // -----------------------------------
      style={styles.root}
      sections={sectionData}
      renderItem={renderItem}
      keyExtractor={keyExtractorFunc}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={() => (
        <View style={styles.seperator}></View>
      )}></SectionList>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 56,
    paddingTop: 10,
  },
  sectionHeaderText: {
    fontSize: 56,
    paddingTop: 10,
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
  seperator: {
    width: '100%',
    height: 10,
    backgroundColor: '#d0d0d0',
  },
});
