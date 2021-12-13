import AsyncStorage from '@react-native-async-storage/async-storage';
import { IHighScore } from '../Components/HighScores/HighScoreInterface';
import { HIGH_SCORES } from '../Constants/Constants';

export const getHighScores = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(HIGH_SCORES)
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
      console.log('Error reading high scores', e);      
    }
  }

  export const setHighScores = async (value: IHighScore[]) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(HIGH_SCORES, jsonValue)
    } catch (e) {
        console.log('Error setting high scores', e); 
    }
  }
