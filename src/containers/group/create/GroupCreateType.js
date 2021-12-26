import React from 'react';
import {View, StyleSheet} from 'react-native';

import TextInfo from '../../common/TextInfo';

import colors from '../../../theme/colors';
import GroupCreateTypeItem from './components/GroupCreateTypeItem';

function GroupCreateType({navigation}) {
    return (
        <View style={styles.container}>
            <TextInfo
                title="그룹 생성하기"
                subtitle="어떤 종류의 그룹을 만드실껀가요?"></TextInfo>
            <View style={styles.typeList}>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="책"
                        imgSource={require('../../../assets/images/book.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="블로그"
                        imgSource={require('../../../assets/images/blog.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="뉴스기사"
                        imgSource={require('../../../assets/images/news.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="연재물"
                        imgSource={require('../../../assets/images/series.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="SNS"
                        imgSource={require('../../../assets/images/sns.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="기타"
                        imgSource={require('../../../assets/images/etc.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
    typeList: {
        paddingHorizontal: 55,
    },
    typeLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 28,
    },
});

export default GroupCreateType;
