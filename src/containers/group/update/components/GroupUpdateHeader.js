import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';

const GroupUpdateHeader = ({modalActive, setCancelModal}) => {

    return (
        <>
            <View style={[styles.header, modalActive ? {opacity: 0} : null]}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        setCancelModal(true);
                    }}>
                    <Image source={require('../../../../assets/images/chevron_left.png')} style={styles.headerLeftImage} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>그룹 수정</Text>
                <View style={styles.alignView}></View>
            </View>
            <View style={styles.headerShadow}></View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: metrics.topNavigationHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeftImage: {
        width: 11,
        height: 22,
    },
    backButton: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        width: 50,
    },
    alignView: {
        width:50,
    },
    headerTitle: {
        fontFamily: type.notoSansKR_Medium,
        color: colors.main,
        fontSize: 20,
    },
    headerShadow: {
        height: 1,
        backgroundColor: '#F1F1F1',
        shadowColor: colors.gray4,
        shadowOpacity: 1,
        elevation: 4,
    },
});

export default GroupUpdateHeader;
