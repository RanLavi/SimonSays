import {
    Platform,
    StyleSheet,
  } from 'react-native';
import { deviceHeight, deviceWidth } from '../Dimensions/Dimensions';

export const MyButtonStyle = StyleSheet.create({
    button: {
      width: deviceWidth * 0.6,
      marginBottom: deviceHeight * 0.04,
    },
    buttonOuter: {
      // shadow setup
      shadowOffset: { width: 4, height: 4 },
      shadowColor: Platform.OS === 'ios' ? '#CBD4E1' : undefined,
      shadowOpacity: 1.0,
      shadowRadius: 8,
    },
    buttonInner: {
      backgroundColor: '#D69F3C',
      height: deviceHeight * 0.075,
      borderRadius: 29,
      justifyContent: 'center',
      alignItems: 'center',
      // shadow setup
      shadowOffset: { width: -4, height: -4 },
      shadowColor: Platform.OS === 'ios' ? '#FFFFFF' : undefined,
      shadowOpacity: 1.0,
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: '600',
    },
  });