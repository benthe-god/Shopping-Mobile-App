import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableHighlight, Image, View } from 'react-native';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
      blurRadius={1}
      fadeDuration={1000}
       source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
