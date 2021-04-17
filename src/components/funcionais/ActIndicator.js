import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default (props) => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator color="#eb4034" />
            <ActivityIndicator size="large" color="#666" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
