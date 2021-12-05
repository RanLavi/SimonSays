import {
    StyleSheet,
} from 'react-native';
import { deviceHeight } from '../../Shared/Dimensions/Dimensions';

export const GameScreenStyle = StyleSheet.create({
    boardContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: deviceHeight * 0.1,
    },
    ColoredButtonsWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boardMiddleContainer: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius: 50,
        height: deviceHeight * 0.13,
        width: deviceHeight * 0.13
    },
    startButton: {
        flex: 1,
        alignSelf: 'center'
    },
    innerBoardText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        lineHeight: deviceHeight * 0.13,
    },
});