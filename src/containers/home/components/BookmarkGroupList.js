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
    let bookmarkedList = '';
    useEffect(() => {
        bookmarkedList = groupList.filter(obj => obj.bookmark == true); // 업데이트된 텍스트(title 등)는 바로 반영하지만, 이미지 업데이트 속도 때문에 예전 이미지 정보로 가져오는지 업데이트된 이미지는 바로 반영 x
        // bookmarkedList = groupList; groupList로 직접 가져오면 업데이트된 텍스트 뿐만 아니라 이미지까지 바로 반영해서 보여줌.(NewTiccleGroupList가 이 경우) model에 bookmarkedGroupList를 만드는 건 어떨지...
        if (bookmarkedList.length == 0) {
            setExistBookmark(false);
        } else {
            setExistBookmark(true);
        }
        setData(bookmarkedList);
        console.log('\n\nBookmarkGroupList----------------------');
        console.log(data);
    }, [isGroupChanged]);
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.blackBoldFont}>즐겨찾기</Text>
                <Text style={styles.blackRegularFont}>
                    자주 열어보는 그룹이에요
                </Text>
            </View>
            {existBookmark ? (
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{marginLeft: 11.5}}>
                    {data.map(item => {
                        return (
                            <BookmarkGroup
                                key={item.id}
                                groupData={item}
                                isGroupChanged={isGroupChanged}></BookmarkGroup>
                        );
                    })}
                </ScrollView>
            ) : (
                <Text>즐겨찾기한 그룹이 존재하지 않습니다.</Text>
            )}
        </>
    );
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
