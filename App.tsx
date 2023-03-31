import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Text from './src/component/Text';
import Image from './src/component/Image';
import ImageBackground from './src/component/ImageBackground';
import TextInput from './src/component/TextInput';
import TouchableOpacity from './src/component/TouchableOpacity';
import Button from './src/component/Button';
import MyScrollView from './src/component/ScrollView';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic" /> */}
      <MyScrollView />
    </SafeAreaView>
  );
}

export default App;
