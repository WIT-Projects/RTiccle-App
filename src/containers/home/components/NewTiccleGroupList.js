import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {type} from '../../../theme/fonts';
import TiccleGroup from './TiccleGroup';
import {groupList} from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';
import colors from '../../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const NewTiccleGroupList = () => {
    const [isExistGroup, setIsExistGroup] = useState(false);
    const [data, setData] = useState([]);
    const {isGroupChanged} = useGroupChanged();
    const navigation = useNavigation();

    useEffect(() => {
        setIsExistGroup(groupList.length != 0);
        setData(groupList); // TODO sorting
        console.log('newticcleGroupList===============');
        console.log('group', data);
    }, [isGroupChanged]);

    return (
        <>
            <View style={styles.groupCreateButton}>
                <Text style={styles.blackBoldFont}>내 그룹</Text>
                <TouchableOpacity onPress={() => navigation.navigate('GroupCreateName')}>
                    <Image source={require('../../../assets/images/groupCreateButton.png')}></Image>
                </TouchableOpacity>
            </View>
            {isExistGroup ? (
                <View style={styles.existTiccle}>
                    {data.map((item, index) => {
                        return <TiccleGroup key={index} groupData={item}></TiccleGroup>;
                    })}
                </View>
            ) : (
                <View style={styles.noTiccle}>
                    <Image source={require('../../../assets/images/noTiccle.png')} style={styles.noTiccleImage}></Image>
                    <Text style={styles.noTiccleText}>생성된 티끌이 없어요</Text>
                    <Text style={styles.noTiccleText}>첫 티끌을 생성해보세요!</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    existTiccle: {
        flex: 1,
        marginTop: 18,
    },
    blackBoldFont: {
        marginRight: 5,
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
    },
    groupCreateButton: {
        flexDirection: 'row',
        marginTop: 36,
        marginHorizontal: 18,
        alignItems: 'center',
    },
    noTiccle: {
        flex: 1,
        marginTop: 72,
        alignItems: 'center',
    },
    noTiccleImage: {
        marginBottom: 20,
    },
    noTiccleText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.gray5,
    },
});

export default NewTiccleGroupList;
