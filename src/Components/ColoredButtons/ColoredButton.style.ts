import {
    StyleSheet,
  } from 'react-native';
import { deviceHeight, deviceWidth } from '../../Shared/Dimensions/Dimensions';

export const ColoredButtonStyle = StyleSheet.create({
    ColoredButton: {
        width: deviceWidth * 0.46,
        height: deviceHeight * 0.23,
        borderRadius: 30
    }
  });