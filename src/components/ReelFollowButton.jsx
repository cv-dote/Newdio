import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { string } from 'prop-types';

export default function ReelFollowButton(props) {
    const { children } = props;
    return (
        <View style={styles.Circle}>
            <Image style={styles.artistCircleView} source={require('../assets/ArtistView.png')}/>
            <View style={styles.plusButton}>
                <Text style={styles.plusLabel}>{children}</Text>
            </View>
        </View>
    )
}

ReelFollowButton.propTypes = {
    children: string.isRequired,
};


const styles = StyleSheet.create({
    Circle: {
        marginLeft: 19,
        marginTop: 29,
    },
    artistCircleView: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    plusButton: {
        backgroundColor: '#FC9D0F',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute',
        left: 44,
        bottom: 0,
    },
    plusLabel: {
        color: '#FFFFFF',
        fontSize: 24,
        lineHeight: 24,
    },
})