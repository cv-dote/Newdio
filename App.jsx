import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArtistPage from './src/screens/ArtistPage';
// import myLibraryArtist from './src/screens/MyLibraryArtistScreen';
// import MyLibraryReelScreen from './src/screens/MyLibraryReelScreen';
// import RecommendReelScreen from './src/screens/RecommendReelScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      {/* initialRouteName="ArtistPage" */}
        <Stack.Screen name="ArtistPage" component={ArtistPage} />
        {/* <Stack.Screen name="Home" component={myLibraryArtist} /> */}
        {/* <Stack.Screen name="Home" component={MyLibraryReelScreen} /> */}
        {/* <Stack.Screen name="RecommendReelScreen" component={RecommendReelScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
