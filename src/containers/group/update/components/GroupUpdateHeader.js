import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';

const GroupUpdateHeader = ({modalActive}) => {
    const navigateTo = useNavigation();
    return (
        <View style={[styles.header, modalActive ? {opacity: 0} : null]}>
            <TouchableOpacity
                onPress={() => {
                    navigateTo.goBack();
                }}>
                <Image source={require('../../../../assets/images/chevron_left.png')} style={styles.headerLeftImage} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>그룹 수정</Text>
            <View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: metrics.topNavigationHeight,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeftImage: {
        width: 11,
        height: 22,
    },
    headerTitle: {
        fontFamily: type.notoSansKR_Medium,
        color: colors.main,
        fontSize: 20,
    },
});

export default GroupUpdateHeader;
