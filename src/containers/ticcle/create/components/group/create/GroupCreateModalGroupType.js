import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import colors from '../../../../../../theme/colors';

const GroupCreateModalGroupType = ({type, setType}) => {

    const groupType = ['책', '블로그', '뉴스기사', '연재물', 'SNS', '기타'];
    
    return(
        <View style={styles.groupTypeContainer}>
            {groupType.map((groupType, index) => (
                <TouchableOpacity key={index} onPress={() => setType(index)}
                    style={[styles.groupTypeTocuhable, (index === type) ? styles.selectedType: styles.unSelectedType ]} 
                >
                    <Text>{groupType}</Text>
                </TouchableOpacity>
            ))}
        </View>
   )
};

const styles = StyleSheet.create({
    groupTypeContainer:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingTop: 35,
    },
    groupTypeTocuhable:{
        paddingVertical: 10,
        paddingHorizontal: 3,
        borderWidth : 1,
        borderRadius: 4,
        borderColor: colors.sub
    },
    selectedType:{
        backgroundColor: colors.sub
    },
    unSelectedType:{
        backgroundColor: colors.white
    },
});

export default GroupCreateModalGroupType;
