import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoExample from './VideoExample'; 

export default function App() {
  return (
      <View style={styles.container}>
        <VideoExample localVideoFile={require('./assets/bunny.mp4')} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
