import React  from 'react';
import {
    Pressable,
} from 'react-native';
import { colorList, myBorderRadius } from '../../Constants/Constants';
import { ColoredButtonStyle as styles } from './ColoredButton.style';
import { IColoredButton} from './ColoredButtonInterface';

const ColoredButton = (props: IColoredButton) => {

    return (
        <Pressable style={[styles.ColoredButton, myBorderRadius[props.index],
        { backgroundColor: colorList[props.index], opacity: props.display ? 0.5 : 1 }]}
            onPress={() => props.onPress()} />
    );
};

export default ColoredButton;
