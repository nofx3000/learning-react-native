import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import TextDemo from './src/component/TextDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <TextDemo />
    </SafeAreaView>
  );
}

export default App;
