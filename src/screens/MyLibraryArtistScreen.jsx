import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Ko_AppBar from '../components/Ko_AppBar';
import Ko_Footer from '../components/Ko_Footer';
import Ko_ArtistList from '../components/Ko_ArtistList';

export default function myLibraryArtist() {
  return (
    <View>
      <Ko_AppBar />
      <Ko_ArtistList />
      <Ko_Footer />
    </View>
  );
}
