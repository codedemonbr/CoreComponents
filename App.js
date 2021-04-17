import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ActIndicator from './src/components/funcionais/ActIndicator';

export default function App() {
    return (
        <View style={styles.container}>
            <ActIndicator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
