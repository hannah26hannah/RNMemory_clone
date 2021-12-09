import React from 'react'
import { View } from 'react-native';

export const navigationOptions = {
  headerTitle: 'RNMemory',
  headerStyle: {
    backgroundColor: '#333'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
};




export default function Game() {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff"
  },
  body: {
    marginTop: 10
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flatlistRow: {
    flex: 1,
    padding: 10
  }
};


