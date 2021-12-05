import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LayoutStyle as layoutStyles } from '../../Layout/Layout.style';
import MyButton from '../../Shared/MyButton/MyButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={layoutStyles.background}>
      <View style={{height: getStatusBarHeight()}} />
      <Text style={layoutStyles.title}>Simon Says</Text>
      <MyButton navigation={navigation} navigateTo={'GameScreen'} buttonText={'New Game'} />
      <MyButton navigation={navigation} navigateTo={'HighScores'} buttonText={'High Scores'} />
    </View>
  );
};

export default HomeScreen;
