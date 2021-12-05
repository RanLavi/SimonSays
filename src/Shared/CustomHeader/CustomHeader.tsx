import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LayoutStyle } from '../../Layout/Layout.style';
import MyButton from '../MyButton/MyButton';
import { CustomHeaderStyle as styles } from './CustomHeader.style';
import { ICustomHeader } from './CustomHeaderInterface';

const CustomHeader = (props: ICustomHeader) => {

  return (
    <>
      <View style={{ height: getStatusBarHeight() }} />
      <View style={styles.headerContainer}>
        <MyButton buttonText={'Back'} navigation={props.navigation} 
        buttonStyle={styles.backButton} buttonTextStyle={styles.backButtonText} buttonInnerHeight={styles.buttonInnerHeight} />
        <View style={styles.titleContainer}>
          <Text style={[LayoutStyle.title, props.titleStyle]}>{props.title}</Text>
        </View>
        <View style={styles.rightPlaceHolder} />
      </View>
    </>
  )
}

export default CustomHeader;