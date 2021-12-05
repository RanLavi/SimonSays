import {
    StyleSheet,
} from 'react-native';
import { deviceHeight } from '../Shared/Dimensions/Dimensions';

export const LayoutStyle = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lavender',
    },
    title: {
        textAlign: 'center',
        marginBottom: deviceHeight * 0.05,
        fontSize: 30,
        fontWeight: '600'
    },
});