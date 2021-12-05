import React, { useState } from 'react';
import { Modal, Pressable, Text, View, TextInput } from 'react-native';
import { INewScorePopup } from './NewScorePopupInterface';
import { NewScorePopupStyle as styles } from './NewScorePopup.style';
import { setHighScores } from '../../Services/AsyncStorage.service';
import { NUMBER_OF_HIGH_SCORES } from '../../Constants/Constants';
import { IHighScore } from '../HighScores/HighScoreInterface';

const NewScorePopup = (props: INewScorePopup) => {
    const [playerName, setPlayerName] = useState<string>('');

    const onPress = async () => {
        props.highScores.push({ name: playerName, score: props.score });
        props.highScores.sort((a: IHighScore, b: IHighScore) => b.score - a.score);
        props.highScores.splice(NUMBER_OF_HIGH_SCORES);
        await setHighScores(props.highScores);
        props.setShowNewScorePopup(!props.showNewScorePopup);
    }

    return (
        <Modal animationType="slide"
            transparent={true}
            visible={props.showNewScorePopup}
            onRequestClose={() => {
                props.setShowNewScorePopup(!props.showNewScorePopup);
            }}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>New Record!</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your name'}
                    value={playerName}
                    onChangeText={setPlayerName}
                />
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => onPress()}
                >
                    <Text style={styles.textStyle}>Save Record</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default NewScorePopup;