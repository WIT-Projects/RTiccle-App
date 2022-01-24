import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {type} from '../../../theme/fonts';
import {groupList} from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';
import BookmarkGroup from './BookmarkGroup';

const BookmarkGroupList = () => {
    const [existBookmark, setExistBookmark] = useState(false);
    const [data, setData] = useState([]);
    const {isGroupChanged} = useGroupChanged();
    useEffect(() => {
        let bookmarkedList = groupList.filter(obj => obj.bookmark == true);
        if (bookmarkedList.length == 0) {
            setExistBookmark(false);
        } else {
            setExistBookmark(true);
        }
        setData(bookmarkedList);
        console.log('\n\nBookmarkGroupList----------------------');
        console.log(data);
    }, [isGroupChanged]);
    if (existBookmark) {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.blackBoldFont}>즐겨찾기</Text>
                    <Text style={styles.blackRegularFont}>자주 열어보는 그룹이에요</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginLeft: 11.5}}>
                    {data.map(item => {
                        return <BookmarkGroup key={item.id} groupData={item}></BookmarkGroup>;
                    })}
                </ScrollView>
            </>
        );
    }
    return null;
};

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
});

export default BookmarkGroupList;
