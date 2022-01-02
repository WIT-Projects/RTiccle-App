import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupCreate from '../../../../context/hook/useGroupCreate';

const GroupUpdateTypeItem = ({navigation, typeName, typeNum, imgSource}) => {
    const {setGroupType} = useGroupCreate();
    return (
        <View style={styles.typeItem}>
            <TouchableOpacity
                onPress={() => {
                    setGroupType(typeNum);
                    navigation.navigate('Home');
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
