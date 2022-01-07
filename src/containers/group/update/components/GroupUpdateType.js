import React from 'react';
import {View, StyleSheet} from 'react-native';
import GroupUpdateTypeItem from '../../update/components/GroupUpdateTypeItem';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';

import colors from '../../../../theme/colors';

const GroupUpdateType = ({typeNum}) => {
    return (
        <View style={styles.container}>
            <View style={styles.typeList}>
                <View style={styles.typeLine}>
                    <GroupUpdateTypeItem
                        typeName="책"
                        typeNum={0}
                        imgSource={
                            typeNum === 0
                                ? require('../../../../assets/images/book.png')
                                : require('../../../../assets/images/bookNot.png')
                        }></GroupUpdateTypeItem>
                    <GroupUpdateTypeItem
                        typeName="블로그"
                        typeNum={1}
                        imgSource={
                            typeNum === 1
                                ? require('../../../../assets/images/blog.png')
                                : require('../../../../assets/images/blogNot.png')
                        }></GroupUpdateTypeItem>
                    <GroupUpdateTypeItem
                        typeName="뉴스기사"
                        typeNum={2}
                        imgSource={
                            typeNum === 2
                                ? require('../../../../assets/images/news.png')
                                : require('../../../../assets/images/newsNot.png')
                        }></GroupUpdateTypeItem>
                </View>
                <View style={styles.typeLine}>
                    <GroupUpdateTypeItem
                        typeName="연재물"
                        typeNum={3}
                        imgSource={
                            typeNum === 3
                                ? require('../../../../assets/images/serial.png')
                                : require('../../../../assets/images/serialNot.png')
                        }></GroupUpdateTypeItem>
                    <GroupUpdateTypeItem
                        typeName="SNS"
                        typeNum={4}
                        imgSource={
                            typeNum === 4
                                ? require('../../../../assets/images/sns.png')
                                : require('../../../../assets/images/snsNot.png')
                        }></GroupUpdateTypeItem>
                    <GroupUpdateTypeItem
                        typeName="기타"
                        typeNum={5}
                        imgSource={
                            typeNum === 5
                                ? require('../../../../assets/images/etc.png')
                                : require('../../../../assets/images/etcNot.png')
                        }></GroupUpdateTypeItem>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
