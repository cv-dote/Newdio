import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer () {
    return (
        <View style={styles.footer}>
            <View style={styles.homeTab}>
                <Text style={styles.homeButton}>Home</Text>
            </View>
            <View style={styles.libraryTab}>
                <Text style={styles.libraryButton}>My Library</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width:'100%',
        height: 72,
        backgroundColor: '#090808',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    homeTab: {
        marginBottom: 16,
    },
    libraryTab: {
        marginBottom: 16,
    },
    homeButton: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF',
    },
    libraryButton: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF',
    },
})
