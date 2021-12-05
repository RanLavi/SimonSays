import {
    StyleSheet,
} from 'react-native';
import { deviceHeight, deviceWidth } from '../Dimensions/Dimensions';

export const CustomHeaderStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton: {
        paddingLeft: deviceWidth * 0.01,
        flex: 1,
    },
    buttonInnerHeight: {
        height: deviceHeight * 0.052
    },
    backButtonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    titleContainer: {
        flex: 3
    },
    rightPlaceHolder: {
        flex: 1,
        paddingRight: deviceWidth * 0.01,
    },
});