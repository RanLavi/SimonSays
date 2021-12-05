import { RUNNING } from "../Components/GameScreen/GameStateInterface"

export const colorList = ['green', 'red', 'yellow', 'blue']

export const initialGameState = {
    running: RUNNING.INITIAL,
    displayNext: false,
    score: 0,
    colorsArray: [],
    userPick: 0,
}

export const myBorderRadius = [{borderTopLeftRadius: 300}, {borderTopRightRadius: 300}, {borderBottomLeftRadius: 300}, {borderBottomRightRadius: 300}]

export const NUMBER_OF_HIGH_SCORES = 10;

export const HIGH_SCORES = 'High Scores';
