import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Text from './src/component/Text';
import Image from './src/component/Image';
import ImageBackground from './src/component/ImageBackground';
import TextInput from './src/component/TextInput';
import TouchableOpacity from './src/component/TouchableOpacity';
import Button from './src/component/Button';
import MyScrollView from './src/component/ScrollView';
import FlatList from './src/component/FlatList';
import SectionList from './src/component/SectionList';
import RefreshControl from './src/component/RefreshControl';
import Modal from './src/component/Modal';
import StatusBar from './src/component/StatusBar';
import Switch from './src/component/Switch';

import PersonalInfo from './src/view/PersonalInfo.jsx';

import Platform from './src/APIs/Platform';
import Linking from './src/APIs/Linking';
import PixelRatio from './src/APIs/PixelRatio';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic" /> */}
      <PixelRatio />
    </SafeAreaView>
  );
}

export default App;
