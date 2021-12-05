import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { MyButtonStyle as styles } from './MyButton.style';
import { IMyButton } from './MyButtonInterface';

const MyButton = (props: IMyButton) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, props.buttonStyle]}
            onPress={() => {
                props.navigateTo ? props.navigation.navigate(props.navigateTo) : props.navigation.goBack()
            }}>
            <View style={styles.buttonOuter}>
                <View
                    style={[styles.buttonInner, props.buttonInnerHeight]}>
                    <Text style={[styles.buttonText, props.buttonTextStyle]}>{props.buttonText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;