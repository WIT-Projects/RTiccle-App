import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';

const GroupUpdateTypeItem = ({typeName, typeNum, imgSource}) => {
    const {setGroupUpdateType} = useGroupUpdate();
    return (
        <View style={styles.typeItem}>
            <TouchableOpacity
                onPress={() => {
                    setGroupUpdateType(typeNum);
                }}>
                <Image source={imgSource}></Image>
            </TouchableOpacity>
            <Text style={styles.typeName}>{typeName}</Text>
        </View>
    );
};

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

export default GroupUpdateTypeItem;
