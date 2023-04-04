import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, SectionList, Text} from 'react-native';
export default () => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     sectionRef.current.scrollToLocation({
  //       // 分区索引
  //       sectionIndex: 1,
  //       // item索引（sectionText为0索引）
  //       itemIndex: 2,
  //       // 显示位置
  //       viewPostion: 0,
  //       animated: true,
  //     });
  //   }, 2000);
  // }, []);

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
      ref={sectionRef}
      style={styles.root}
      sections={sectionData}
      renderItem={renderItem}
      keyExtractor={keyExtractorFunc}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      stickySectionHeadersEnabled={true}
      // 以下属性同ScrollView和FlatList
      // contentContainerStyle={..}
      // showsVerticalScrollIndicator={..}
      // onScroll={..}
      // keyboardDismissMode={..}
      // keyboardShouldPersistTaps={..}
      // horizontal={..}
      // ListHeaderComponent={<Text>ListHeaderComponent</Text>}
      // ListFooterComponent={<Text>ListFooterComponent</Text>}
      // ListEmptyComponent={<Text>ListEmptyComponent</Text>}
    ></SectionList>
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
