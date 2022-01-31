import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {doDeleteGroup} from '../../../model/GroupModel';
import {useNavigation} from '@react-navigation/native';
import useGroupChanged from '../../../context/hook/useGroupChanged';
import { useErrorHandler } from 'react-error-boundary'

const GroupDeleteButton = ({groupData}) => {
    const navigation = useNavigation();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const handleError = useErrorHandler() // for error handling

    return (
        <TouchableOpacity
            onPress={() => {
                try {
                    doDeleteGroup(groupData);
                    setIsGroupChanged(!isGroupChanged);
                    navigation.navigate('Home');
                } catch (err) {
                    handleError(err)
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
