import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {doDeleteGroup} from '../../../model/GroupModel';
import {useNavigation} from '@react-navigation/native';

const GroupDeleteButton = ({groupData}) => {
    const navigation = useNavigation();

    console.log(groupData);
    return (
        <TouchableOpacity
            onPress={() => {
                doDeleteGroup(groupData);
                console.log('dellllllllllte----------');
                navigation.navigate('Home');
            }}>
            <Image
                style={styles.deleteButton}
                source={require('../../../assets/icon/trashCan.png')}></Image>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    deleteButton: {
        width: 15,
        height: 18,
    },
});

export default GroupDeleteButton;
