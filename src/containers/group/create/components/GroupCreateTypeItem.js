import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';

function GroupCreateTypeItem({navigation, typeName, imgSource}) {
    return (
        <View style={styles.typeItem}>
            <TouchableOpacity
                onPress={() => {
                    console.log(typeName);
                    navigation.navigate('GroupCreateName');
                }}>
                <Image source={imgSource}></Image>
            </TouchableOpacity>
            <Text style={styles.typeName}>{typeName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    typeItem: {
        alignItems: 'center',
    },
    typeName: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.gray4,
        marginTop: 8,
    },
});

export default GroupCreateTypeItem;
