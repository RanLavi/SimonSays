import {
    StyleSheet,
} from 'react-native';
import { deviceHeight, deviceWidth } from '../../Shared/Dimensions/Dimensions';

export const NewScorePopupStyle = StyleSheet.create({
    modalView: {
        marginTop: deviceHeight * 0.18,
        marginHorizontal: deviceWidth * 0.05,
        backgroundColor: "white",
        borderRadius: 20,
        padding: deviceWidth * 0.05,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textInput: {
        textAlign: 'center',
        width: deviceWidth * 0.75,
        marginBottom: deviceHeight * 0.02,
        paddingVertical: deviceHeight * 0.02,
        paddingHorizontal: deviceWidth * 0.03,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        borderRadius: 20,
        paddingVertical: deviceHeight * 0.02,
        paddingHorizontal: deviceWidth * 0.15,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: deviceHeight * 0.02,
        textAlign: "center",
        fontSize: 20
    }
});