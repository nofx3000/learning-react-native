import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

export default () => {
  const renderItemFunc = ({item, index}) => {
    return <Text style={styles.text}>{item}</Text>;
  };

  const keyExtractorFunc = (item, index) => {
    return `${item}--${index}`;
  };

  return (
    <FlatList
      style={styles.root}
      data={data}
      renderItem={renderItemFunc}
      // key设置器
      keyExtractor={keyExtractorFunc}
      // contentContainerStyle={..}
      // showsVerticalScrollIndicator={..}
      // onScroll={..}
      // keyboardDismissMode={..}
      // keyboardShouldPersistTaps={..}
      //   horizontal={..}
      ListHeaderComponent={<Text>ListHeaderComponent</Text>}
      ListFooterComponent={<Text>ListFooterComponent</Text>}
      ListEmptyComponent={<Text>ListEmptyComponent</Text>}
      ItemSeparatorComponent={
        <View style={styles.seperator}></View>
      }></FlatList>
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
  seperator: {
    width: '100%',
    height: 20,
    backgroundColor: '#d0d0d0',
  },
});
