import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Feather } from '@expo/vector-icons';

export default function Ko_Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerInner}>
        <View style={styles.footerLeftBox}>
          {/* <Feather name="home" size={24} color="black" /> */}
          <Text style={styles.footerLeftText}>Home</Text>
        </View>
        <View style={styles.footerRightBox}>
          <Text style={styles.footerRightText}>My Library</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    width: '100%',
    height: 72,
    backgroundColor: 'rgba(9,8,8,0.8)'
  },
  footerInner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLeftBox: {
    paddingHorizontal: 86,
    paddingVertical: 8,
  },
  footerRightBox: {
    paddingHorizontal: 86,
    paddingVertical: 8,
  },
  footerLeftText: {
    color: '#E5E5E5',
    fontSize: 12,
  },
  footerRightText: {
    color: '#E5E5E5',
    fontSize: 12,
  }
})