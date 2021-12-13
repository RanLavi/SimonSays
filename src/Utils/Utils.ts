import { IGameState, RUNNING } from "../Components/GameScreen/GameStateInterface";
import Sound from 'react-native-sound';
import { getHighScores } from "../Services/AsyncStorage.service";
import { NUMBER_OF_HIGH_SCORES } from "../Constants/Constants";

Sound.setCategory('Playback', true);

export const sounds = {
    green: require('../../assets/green.mp3'),
    red: require('../../assets/red.mp3'),
    yellow: require('../../assets/yellow.mp3'),
    blue: require('../../assets/blue.mp3'),
    error: require('../../assets/error.mp3')
}

export const timeout = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const checkSoundAndPlayerPick = (gameState: IGameState, color: string) => {

    if (gameState.colorsArray[gameState.userPick] === color) {
        soundFunction(sounds[color]);
        return false
    }
    else {
        soundFunction(sounds.error);
        return true
    }
}

export const soundFunction = (color: any) => {
    const playSound = new Sound(color, (error: any) => {
        if (error) {
            console.log('error', error.message);
            return
        }
        playSound.play(() => { playSound.release() })
    })
}

export const checkGameState = (gameState: IGameState, gameOver: boolean) => {
    if (gameOver) {
        return { ...gameState, running: RUNNING.NO }
    }
    const middleOfPlayersTurn = gameState.userPick !== gameState.colorsArray.length - 1;
    if (middleOfPlayersTurn) {
        return { ...gameState, userPick: gameState.userPick + 1 }
    }
    return { ...gameState, displayNext: true, score: gameState.score + 1, userPick: 0 }
}

export const checkScore = async (score: number) => {
    const highScores = await getHighScores();
    const lowestScore = highScores?.[NUMBER_OF_HIGH_SCORES - 1]?.score ?? 0;
    if (score > lowestScore) {
        return highScores
    }
    return;
}