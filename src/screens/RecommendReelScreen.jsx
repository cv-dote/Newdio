import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ReelAppbar from '../compornents/ReelAppbar';
import ReelBody from '../compornents/ReelBody';
import Footer from '../compornents/ShuntaroFooter';

export default function RecommendReelScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <ReelAppbar />
            {/* body */}
            <ScrollView pagingEnabled={true}>
                <ReelBody />
                <ReelBody />
                <ReelBody />
            </ScrollView>
            {/* Footer */}
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
