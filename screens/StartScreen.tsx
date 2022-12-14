// import React, {FC} from 'react';
// import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

// interface StartScreenProps {
//   startGame: () => void;
// }

// const StartScreen: FC<StartScreenProps> = ({startGame}) => {
//   return (
//     <View style={styles.body}>
//       <View style={styles.heading}>
//         <Text style={styles.title}>Funny Quiz</Text>
//       </View>

//       <View>
//         <TouchableHighlight style={styles.startButton} onPress={startGame}>
//           <Text style={styles.buttonText}>Start</Text>
//         </TouchableHighlight>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#141414',
//   },
//   heading: {
//     marginBottom: 30,
//   },
//   title: { 
//     textAlign: 'center',
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
//   startButton: {
//     backgroundColor: '#8854c0',
//     borderRadius: 8,
//     minWidth: 150,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
// });

// export default StartScreen;

import Reactm, {FC} from "react";
import {View, StyleSheet, TouchableHighlight, Text} from "react-native";

interface StartScreenProps {
  startGame: () => void
}

const StartScreen: FC<StartScreenProps> = ({startGame}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>VC Quiz</Text>
      </View>
      <TouchableHighlight style={styles.startButton} onPress={startGame}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center'
  },

  header: {
    marginBottom: 30
  },

  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  },

  startButton: {
    backgroundColor: "green",
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18
  }

})

export default StartScreen