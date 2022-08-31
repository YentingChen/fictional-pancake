// import React, {FC, useState} from 'react';
// import {SafeAreaView, StatusBar} from 'react-native';

// import StartScreen from './screens/StartScreen';
// import GameScreen from './screens/GameScreen';

// const App: FC = () => {
//   const [isPlaying, setPlaying] = useState(false);

//   function startGame() {
//     setPlaying(true);
//   }

//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView style={{backgroundColor: '#000'}}>
//         {!isPlaying ? <StartScreen startGame={startGame} /> : <GameScreen />}
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;

import React, { useState, FC } from "react"
import {SafeAreaView, StatusBar, StyleSheet} from "react-native"
import GameScreen from "./screens/GameScreen";

import StartScreen from "./screens/StartScreen"

const App: FC = () => {

  const [isPlaying, setPlaying] = useState(false)

  function startGame() {
    setPlaying(true)
  }

  return (
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <SafeAreaView style={styles.container}>
      { !isPlaying ? <StartScreen startGame={startGame}/> : <GameScreen/> }
    </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  }
})

export default App