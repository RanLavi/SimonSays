import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';
import { LayoutStyle as layoutStyles } from '../../Layout/Layout.style';
import { getHighScores } from '../../Services/AsyncStorage.service';
import CustomHeader from '../../Shared/CustomHeader/CustomHeader';
import { IHighScore } from './HighScoreInterface';
import { HighScoresStyle as styles } from './HighScores.style';

const HighScores = ({ navigation }) => {
    const [highScores, setHighScores] = useState<IHighScore[]>([]);

    useEffect(() => {
        const getScores = async () => {
            const scores = await getHighScores();
            setHighScores(scores)
        }
        getScores();
    }, []);

    const scoresTable = ({ item }) => (
        <View style={styles.scoresContainer}>
            <Text style={styles.scoresTextInfo}>{item.name}</Text>
            <Text style={styles.scoresTextInfo}>{item.score}</Text>
        </View>
    )

    return (
        <View style={[layoutStyles.background, styles.background]}>
            <CustomHeader title={'High Scores'} navigation={navigation} titleStyle={styles.title} />
            <View style={styles.scoresContainer}>
                <Text style={[layoutStyles.title, styles.title]}>Name</Text>
                <Text style={[layoutStyles.title, styles.title]}>Score</Text>
            </View>
            <FlatList data={highScores}
                renderItem={scoresTable}
            />
        </View>
    );
};

export default HighScores;