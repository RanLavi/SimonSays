import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colorList, initialGameState } from '../../Constants/Constants';
import { checkGameState, checkScore, checkSoundAndPlayerPick, soundFunction, sounds, timeout } from '../../Utils/Utils';
import ColoredButtons from '../ColoredButtons/ColoredButton';
import NewScorePopup from '../NewScorePopup/NewScorePopup';
import { GameScreenStyle as styles } from './GameScreen.style';
import { LayoutStyle as layoutStyles } from '../../Layout/Layout.style';
import { IGameState, RUNNING } from './GameStateInterface';
import CustomHeader from '../../Shared/CustomHeader/CustomHeader';

const GameScreen = ({ navigation }) => {
    const [gameState, setGameState] = useState<IGameState>(initialGameState);
    const [displayColor, setDisplayColor] = useState<string>('');
    const [showNewScorePopup, setShowNewScorePopup] = useState<boolean>(false);
    const [highScores, setHighScores] = useState(undefined);

    useEffect(() => { /* Choose new color to display */
        if (gameState.displayNext) {
            const newColor = colorList[Math.floor(Math.random() * 4)]
            const colorsArrayCopy = [...gameState.colorsArray];
            colorsArrayCopy.push(newColor);
            setGameState({ ...gameState, colorsArray: colorsArrayCopy });
        }
    }, [gameState.displayNext])

    useEffect(() => { /* After array in state is updated, call the display colors function */
        if (gameState.displayNext && gameState.colorsArray.length !== 0) {
            displayColors();
        }
    }, [gameState.colorsArray.length])

    const displayColors = async () => { /* Display the colors and play sounds one by one */
        if (gameState.colorsArray.length > 1) { await timeout(500) }
        for (let color of gameState.colorsArray) {
            await displayColorFunc(color);
        }
        setGameState({ ...gameState, displayNext: false })
    }

    const displayColorFunc = async (color: string) => { /* Change Display state, check player picks and call sounds, check if high score */
        if (gameState.colorsArray.length !== 1 && gameState.displayNext) { await timeout(400) }
        setDisplayColor(color);
        if (gameState.displayNext) {
            soundFunction(sounds[color])
            await delayFunction()
        }
        else {
            const gameOver = checkSoundAndPlayerPick(gameState, color);
            await delayFunction()
            setGameState(checkGameState(gameState, gameOver));
            if (gameOver) {
                const getHighScores = await checkScore(gameState.score);
                if (getHighScores) {
                    setHighScores(getHighScores);
                    setShowNewScorePopup(true);
                }
            }
        }
    }

    const delayFunction = async () => {
        await timeout(400);
        setDisplayColor('');
    }

    const startGame = () => setGameState({ ...initialGameState, running: RUNNING.YES, displayNext: true })

    return (
        <View style={layoutStyles.background}>
            <CustomHeader title={gameState.running !== RUNNING.NO ? "Let's Play!\n" : `Game Over!\nYour Score is ${gameState.score}`}
                navigation={navigation} titleStyle={layoutStyles.title} />
            {showNewScorePopup && <NewScorePopup highScores={highScores} score={gameState.score}
                showNewScorePopup={showNewScorePopup} setShowNewScorePopup={setShowNewScorePopup} />}
            <View style={styles.boardContainer}>
                <View style={styles.ColoredButtonsWrapper}>
                    {colorList.map((color, index) => <ColoredButtons color={color} key={index} index={index}
                        display={color === displayColor} onPress={() =>
                            !gameState.displayNext && gameState.running && displayColor === '' && displayColorFunc(color)} />)}
                </View>
                <View style={styles.boardMiddleContainer}>
                    {gameState.running !== RUNNING.YES ? <TouchableOpacity onPress={() => startGame()}>
                        <Text style={styles.innerBoardText}>Start</Text>
                    </TouchableOpacity>
                        :
                        <Text style={[styles.innerBoardText, { fontSize: 30 }]}>{gameState.score}</Text>
                    }
                </View>
            </View>
        </View >

    );
};

export default GameScreen;