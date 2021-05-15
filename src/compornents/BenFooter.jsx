import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Ben_Reel_Thum from '../compornents/Ben_Reel_Thum';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Footer container */}
      <View style={styles.footerContainer}>
        <View style={styles.homeButtonContainer}>
          <AntDesign name="home" size={24} color='#FC9D0F' />
          <Text style={styles.footerText} >Home</Text>
        </View>

        <View style={styles.libraryButtonContainer}>
          <MaterialIcons name="library-music" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>My Library</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2D2D',
    color: '#FFFFFF',
  },
  footerContainer:{
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: 72,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#000000',
  },
  footerText:{
    color:'white',
    fontSize: 12,
  },
  homeButtonContainer:{
    width:'50%',
    position: 'absolute',
    left: 0,
    // backgroundColor: 'green',
    alignItems:'center',
    color:'#FC9D0F',
  },
  libraryButtonContainer:{
    width:'50%',
    position: 'absolute',
    right: 0,
    // backgroundColor: 'blue',
    alignItems:'center',
  },
});
