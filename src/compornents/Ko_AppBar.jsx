import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <View style={styles.appbarLeftBox}>
          <Text style={styles.appbarLeft}>Artist</Text>
        </View>
        <View style={styles.appbarRightBox}>
          <Text style={styles.appbarRight}>Reel</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 96,
    backgroundColor: '#090808',
  },
  appbarInner: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appbarLeftBox: {
    borderRightWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    paddingHorizontal: 50,
  },
  appbarRightBox: {
    paddingHorizontal: 50,
  },
  appbarLeft: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
  },
  appbarRight: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 24,
    lineHeight: 32,
  },
})