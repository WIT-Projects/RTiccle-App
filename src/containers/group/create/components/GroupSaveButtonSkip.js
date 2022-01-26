import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupCreate from '../../../../context/hook/useGroupCreate';
import {doCreateGroup} from '../../../../model/GroupModel';
import useGroupChanged from '../../../../context/hook/useGroupChanged';

const GroupSaveButtonSkip = ({navigation, text}) => {
    const {groupCreate, initialGroupCreate} = useGroupCreate();
    const title = groupCreate.title;
    const description = groupCreate.description;
    const mainImage = groupCreate.mainImage;
    const [buttonDisable, setButtonDisable] = useState(false);
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    useEffect(() => {
        groupCreate.mainImage != '' ? setButtonDisable(true) : setButtonDisable(false);
    }, [groupCreate.mainImage]);

    const groupCreateFirebase = async () => {
        const newGroup = {
            title: title,
            description: description,
            bookmark: false,
        };
        const imageSource = mainImage;
        const groupData = await doCreateGroup(newGroup, imageSource);
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
        initialGroupCreate();
        navigation.navigate('GroupDetail', {groupData: groupData});
    };

    return (
        <View style={{alignItems: 'center'}}>
            {buttonDisable ? null : (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        groupCreateFirebase();
                    }}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 168,
        height: 40,
        marginTop: 6,
    },
    buttonText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.gray3,
    },
});

export default GroupSaveButtonSkip;
