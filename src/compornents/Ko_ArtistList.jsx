import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ArtistList() {
  return (
    <ScrollView>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      {/* <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View>
      <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View> */}
      {/* <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View> */}
      {/* <View style={styles.artistListItem}>
        <View style={styles.artistBox}>
          <Text style={styles.artistName}>あいみょん</Text>
        </View>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  artistListItem: {
    height: 80,
    backgroundColor: 'rgba(9,8,8,0.8)',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  artistBox: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  artistName :{
    paddingHorizontal: 15,
    fontSize: 32,
    lineHeight: 48,
    color: '#ffffff',
  },
})