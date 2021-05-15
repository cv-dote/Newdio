import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReelAppbar() {
    return (
        <View style={styles.appbar}>
            <View style={styles.appbarInner}>
                <Text style={styles.appbarRecomButton}>Recommend</Text>
                <Text style={styles.appbarCenterLine}> | </Text>
                <Text style={styles.appbarFollowButton}>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',
        height: 96,
        backgroundColor: '#090808',
        justifyContent: 'flex-end',
    },
    appbarInner: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    appbarCenterLine: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: '#FFFFFF',
    },
    appbarRecomButton: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: '#FFFFFF',
    },
    appbarFollowButton: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(255, 255, 255, 0.7)'
    },
})
