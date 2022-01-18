import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {type} from '../../../theme/fonts';
import TiccleGroup from './TiccleGroup';
import {groupList} from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';

const NewTiccleGroupList = () => {
    const [isExistGroup, setIsExistGroup] = useState(false);
    const [data, setData] = useState([]);

    const {isGroupChanged} = useGroupChanged();

    useEffect(() => {
        setIsExistGroup(groupList.length != 0);
        setData(groupList); // TODO sorting
        console.log('newticcleGroupList===============');
        console.log('group', data);
    }, [isGroupChanged]);

    return (
        <>
            <Text style={styles.blackBoldFont}>신규 티끌이 생성된 그룹</Text>
            {isExistGroup ? (
                <View style={styles.container}>
                    {data.map((item, index) => {
                        return (
                            <TiccleGroup
                                key={index}
                                groupData={item}
                                isGroupChanged={isGroupChanged}></TiccleGroup>
                        );
                    })}
                </View>
            ) : (
                <Text>작성된 티끌이 존재하지 않습니다.</Text>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blackBoldFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
        marginTop: 36,
        marginHorizontal: 18,
        marginBottom: 18,
    },
});

export default NewTiccleGroupList;
