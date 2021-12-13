 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/Components/HomeScreen/HomeScreen';
 import GameScreen from './src/Components/GameScreen/GameScreen';
 import HighScores from './src/Components/HighScores/HighScores';
 
 const App = () => {
 const Stack = createNativeStackNavigator();
 
   return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="GameScreen" component={GameScreen} />
       <Stack.Screen name="HighScores" component={HighScores} />
     </Stack.Navigator>
   </NavigationContainer>
   );
 };
 
 export default App;
 