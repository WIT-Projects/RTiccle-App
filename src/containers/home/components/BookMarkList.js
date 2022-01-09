import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { type } from '../../../theme/fonts';
import MarkTiccle from './MarkTiccle';
import { groupList } from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';

const BookMarkList = () => {
    const [existBookmark, setExistBookmark] = useState(false);
    const [data, setData] = useState([]);

    const { isGroupChanged } = useGroupChanged();

    useEffect(() => {
        const bookmarkedList = groupList.filter(obj => obj.bookmark == true);
        if (bookmarkedList.length == 0) {
            setExistBookmark(false);
        } else {
            setExistBookmark(true);
        }
        setData(bookmarkedList);
    }, [isGroupChanged]);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.blackBoldFont}>즐겨찾기</Text>
                <Text style={styles.blackRegularFont}>자주 열어보는 그룹이에요</Text>
            </View>
            {existBookmark ?
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginLeft: 11.5 }}>
                    {data.map((item) => { 
                        return (<MarkTiccle key={item.id} groupData={item}></MarkTiccle>) 
                    })}
                </ScrollView>
                :
                <Text>즐겨찾기한 그룹이 존재하지 않습니다.</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
        marginHorizontal: 18,
        marginBottom: 10,
    },
    blackBoldFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
    },
    blackRegularFont: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 12,
        marginTop: 6,
    },
})

export default BookMarkList;
