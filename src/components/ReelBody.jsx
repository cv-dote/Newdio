import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import ReelFollowButton from './ReelFollowButton'

const { height, width } = Dimensions.get('window')

export default function ReelBody() {
    return (
        <View style={styles.body}>
            <Image style={styles.ReelView} source={require('../assets/ReelComponent.png')}/>

            <View style={styles.ArtistStatus}>
                <ReelFollowButton>-</ReelFollowButton>
                <Text style={styles.artistName}>ベンジャミン</Text>
            </View>

            <View style={styles.ReelTitleView}>
                <Text style={styles.ReelTitle}>ライブ@仙台駅</Text>
            </View>
            <View style={styles.summaryView}>
                <Text style={styles.summary}>
                    駅前のライブの様子です。めっちゃ楽しかった！僕らのInstagramのアカウントはこちら→@Benjamin
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: width,
        height: height-96,
        backgroundColor: '#2E2D2D',
    },
    ArtistStatus: {
        flexDirection: 'row',
    },
    ReelView: {
        marginTop: 16,
        width: width,
        height: undefined,
        aspectRatio: 16/9,
    },
    artistName: {
        color: '#FFFFFF',
        fontSize: 24,
        lineHeight: 32,
        position: 'absolute',
        left: 105,
        top: 48,
        fontWeight: 'bold'
    },
    ReelTitleView: {
        marginLeft: 43,
        marginTop: 16,                 
    },
    ReelTitle: {
        fontSize: 24,
        lineHeight: 32,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    summaryView: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 16,
    },
    summary: {
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
    }
})
