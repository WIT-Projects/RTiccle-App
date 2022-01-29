import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {doDeleteGroup} from '../../../model/GroupModel';
import {useNavigation} from '@react-navigation/native';
import useGroupChanged from '../../../context/hook/useGroupChanged';

const GroupDeleteButton = ({groupData}) => {
    const navigation = useNavigation();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    return (
        <TouchableOpacity
            onPress={() => {
                try {
                    doDeleteGroup(groupData);
                    setIsGroupChanged(!isGroupChanged);
                    navigation.navigate('Home');
                } catch (error) {
                    console.error(error);
                }
            }}>
            <Image style={styles.deleteButton} source={require('../../../assets/icon/trashCan.png')}></Image>
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
