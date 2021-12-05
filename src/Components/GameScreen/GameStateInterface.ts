export interface IGameState {
    running: RUNNING;
    score: number;
    displayNext: boolean;
    colorsArray: string[];
    userPick: number;
}

export enum RUNNING{
    INITIAL = 0,
    YES,
    NO
}