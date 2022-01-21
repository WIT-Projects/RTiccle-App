import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';

function TextInfo({title, subtitle}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 57,
        paddingHorizontal: 18,
    },
    title: {
        color: colors.gray5,
        fontSize: 24,
        marginBottom: 10,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    subtitle: {
        color: colors.gray4,
        fontSize: 16,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
});

export default TextInfo;
