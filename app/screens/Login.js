import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native'

import Pusher from 'pusher-js/react-native';

Pusher.logToConsole = true; // enable pusher logging - don't include this in production


// Class component's static variable was replaced by this for functional component
export const navigationOptions = {
  header: null
}


export default function Login() {

  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pusher, setPusher] = useState(null); // variable for storing the Pusher reference
  const [myChannel, setMyChannel] = useState(null); // to store the channel assigned to this user

  React.useEffect(() => {
    const pusherInstance = new Pusher('ea50f5fb77e76d3945d3', {
      cluster: 'ap3'
    })

    const channel = pusherInstance.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      alert(JSON.stringify(data))
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.bigText}>RNMemory</Text>
      </View>

      <View style={styles.mainContent}>
        <TextInput
          style={styles.text_field}
          onChangeText={username => {
            setUsername(username)
          }}
          value={username}
          placeholder={'Enter your username'}
        />
      </View>


    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  topContent: {
    flex: 1,
    justifyContent: "center"
  },
  bigText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  mainContent: {
    flex: 1
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#333"
  },
  text_field: {
    width: 200,
    height: 40,
    borderColor: "#bfbfbf",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
};

