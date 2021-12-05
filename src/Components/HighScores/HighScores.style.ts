import {
    StyleSheet,
} from 'react-native';
import { deviceHeight } from '../../Shared/Dimensions/Dimensions';

export const HighScoresStyle = StyleSheet.create({
    background: {
        alignItems: undefined
    },
    title: {
        flex: 5,
        marginBottom: deviceHeight * 0.01,
    },
    scoresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    scoresTextInfo: {
        fontSize: 22,
        marginVertical: deviceHeight * 0.01,
        textAlign: 'center',
        flex: 1
    },
});