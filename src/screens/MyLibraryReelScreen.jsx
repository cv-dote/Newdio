import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import ReelList from '../compornents/ReelLIst';
import AppBar from '../compornents/AppBarMyLibrary';

export default function MyLibraryReelScreen() {
    return (
        <View style={StyleSheet.container}>
            <AppBar />
            <ReelList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090808',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
