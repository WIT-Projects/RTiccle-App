import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#00CE9D" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#F5FCFF88',
    },
});

export default Spinner;
