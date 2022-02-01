import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

const SearchZeroResult = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../../assets/images/logo2.png')}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    logoImage: {
        marginTop: '60%',
    },
});

export default SearchZeroResult;
