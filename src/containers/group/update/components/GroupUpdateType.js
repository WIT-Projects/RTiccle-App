import React from 'react';
import {View, StyleSheet} from 'react-native';
import GroupCreateTypeItem from '../../create/components/GroupCreateTypeItem';

import colors from '../../../../theme/colors';

const GroupUpdateType = ({navigation, typeNum}) => {
    return (
        <View style={styles.container}>
            <View style={styles.typeList}>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="책"
                        typeNum={0}
                        imgSource={
                            typeNum === 0
                                ? require('../../../../assets/images/book.png')
                                : require('../../../../assets/images/bookNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="블로그"
                        typeNum={1}
                        imgSource={
                            typeNum === 1
                                ? require('../../../../assets/images/blog.png')
                                : require('../../../../assets/images/blogNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="뉴스기사"
                        typeNum={2}
                        imgSource={
                            typeNum === 2
                                ? require('../../../../assets/images/news.png')
                                : require('../../../../assets/images/newsNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
                <View style={styles.typeLine}>
                    <GroupCreateTypeItem
                        typeName="연재물"
                        typeNum={3}
                        imgSource={
                            typeNum === 3
                                ? require('../../../../assets/images/serial.png')
                                : require('../../../../assets/images/serialNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="SNS"
                        typeNum={4}
                        imgSource={
                            typeNum === 4
                                ? require('../../../../assets/images/sns.png')
                                : require('../../../../assets/images/snsNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                    <GroupCreateTypeItem
                        typeName="기타"
                        typeNum={5}
                        imgSource={
                            typeNum === 5
                                ? require('../../../../assets/images/etc.png')
                                : require('../../../../assets/images/etcNot.png')
                        }
                        navigation={navigation}></GroupCreateTypeItem>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
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
