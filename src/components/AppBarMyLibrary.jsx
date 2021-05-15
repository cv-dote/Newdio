import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//AppBarはリアクトナビゲーションを使う時に消去します
//スタイリングの時はとりあえず書いておく

export default function AppBarMyLibrary() {
    return (
        <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarArtist}>Artist</Text>
          <Text style={styles.appbarReel}>Reel</Text>
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',
        height: 96,
        backgroundColor: '#090808',
        justifyContent: 'flex-end',
      },
      appbarInner: {
          alignItems: 'center',
      },
      appbarArtist: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        fontSize: 24,
      },
      appbarReel: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        fontSize: 24,
      },
});
