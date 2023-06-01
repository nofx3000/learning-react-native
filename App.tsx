import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
// components
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
// apis
import Platform from './src/APIs/Platform';
import Linking from './src/APIs/Linking';
import PixelRatio from './src/APIs/PixelRatio';
import BackHandler from './src/APIs/BackHandler';
import PermissionsAndroid from './src/APIs/PermissionsAndroid';
import Vibration from './src/APIs/Vibration';
import Keyboard from './src/APIs/Keyboard';
// animations
import AnimatedTiming from './src/Animations/AnimatedTiming';
import Interpolate from './src/Animations/Interpolate';
import AnimatedDecay from './src/Animations/AnimatedDecay';
import AnimatedValueXY from './src/Animations/AnimatedValueXY';
import AnimationCombination from './src/Animations/AnimationCombination';
import AnimatedEvent from './src/Animations/AnimatedEvent';
import LayoutAnimation from './src/Animations/LayoutAnimation';
import PracticeProject from './src/Animations/PracticeProject';
// native
import NativePage from './src/native/NativePage';
import NativeInfoView from './src/native/NativeInfoView';
import NativeInfoViewGroup from './src/native/NativeInfoViewGroup';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic" /> */}
      <NativeInfoViewGroup />
    </SafeAreaView>
  );
}

export default App;
