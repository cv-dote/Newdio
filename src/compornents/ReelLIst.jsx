import React from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function ReelList() {
    return (
        <View>
            <View style={styles.reelListItem}>
                <Fontisto name="rectangle" size={64} color="#218B06" />
                <View>
                    <Text style={styles.reelListItemTitle}>Reel</Text>
                </View>
                <View>
                    <Text style={styles.reelListItemArtistName}>ArtistName</Text>
                </View>
            </View>

            <View style={styles.reelListItem}>
                <Fontisto name="rectangle" size={64} color="#218B06" />
                <View>
                    <Text style={styles.reelListItemTitle}>Reel</Text>
                </View>
                <View>
                    <Text style={styles.reelListItemArtistName}>ArtistName</Text>
                </View>
            </View>

            <View style={styles.reelListItem}>
                <Fontisto name="rectangle" size={64} color="#218B06" />
                <View>
                    <Text style={styles.reelListItemTitle}>Reel</Text>
                </View>
                <View>
                    <Text style={styles.reelListItemArtistName}>ArtistName</Text>
                </View>
            </View>

            <View style={styles.reelListItem}>
                <Fontisto name="rectangle" size={64} color="#218B06" />
                <View>
                    <Text style={styles.reelListItemTitle}>Reel</Text>
                </View>
                <View>
                    <Text style={styles.reelListItemArtistName}>ArtistName</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    reelListItem: {
        backgroundColor: '#2E2D2D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingLeft: 19,
        paddingRight: 41,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    reelListItemTitle: {
        fontSize: 32,
        lineHeight: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    reelListItemArtistName: {
        fontSize: 24,
        lineHeight: 32,
        color: 'rgba(255, 255, 255, 0.5)',
    },
});
