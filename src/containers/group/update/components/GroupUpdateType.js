import React from 'react';
import {View, StyleSheet} from 'react-native';
import GroupCreateTypeItem from '../../create/components/GroupCreateTypeItem';

import colors from '../../../../theme/colors';

const GroupUpdateType = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.typeList}>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="책"
                        typeNum={0}
                        imgSource={require('../../../../assets/images/book.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="블로그"
                        typeNum={1}
                        imgSource={require('../../../../assets/images/blog.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="뉴스기사"
                        typeNum={2}
                        imgSource={require('../../../../assets/images/news.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="연재물"
                        typeNum={3}
                        imgSource={require('../../../../assets/images/series.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="SNS"
                        typeNum={4}
                        imgSource={require('../../../../assets/images/sns.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="기타"
                        typeNum={5}
                        imgSource={require('../../../../assets/images/etc.png')}
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
            </View>
        </View>
    );
};

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

export default GroupUpdateType;