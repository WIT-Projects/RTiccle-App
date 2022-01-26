import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';
import {doUpdateGroup} from '../../../../model/GroupModel';
import useGroupChanged from '../../../../context/hook/useGroupChanged';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import GroupDeleteButton from '../../delete/GroupDeleteButton';

const GroupInfo = ({groupData, navigation}) => {
    const {setGroupUpdate} = useGroupUpdate();

    let source =
        groupData.imageUrl == null || groupData.imageUrl == '' ? require('../../../../assets/images/blankImage.png') : {uri: groupData.imageUrl};

    const [isBookmark, setIsBookmark] = useState(groupData.bookmark);

    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    function setFirebaseBookmark() {
        if (isBookmark == true) {
            setIsBookmark(false);
            doUpdateGroup(groupData.id, {bookmark: false}, false);
        } else {
            setIsBookmark(true);
            doUpdateGroup(groupData.id, {bookmark: true}, false);
        }
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
    }

    return (
        <>
            <ImageBackground source={source} resizeMode="cover" style={styles.container5}>
                <ImageBackground source={require('../../../../assets/images/gradation2.png')} resizeMode="cover" style={styles.container5}>
                    <View style={styles.backDeleteContainer}>
                        <Image
                            style={styles.backBtn}
                            onTouchEnd={() => {
                                navigation.navigate('Home');
                            }}
                            source={require('../../../../assets/icon/backWhite.png')}
                        />
                        <GroupDeleteButton groupData={groupData} style={styles.deleteButton}></GroupDeleteButton>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Text style={styles.title}>{groupData.title}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        setGroupUpdate([]);
                                        navigation.navigate('GroupUpdate', {
                                            groupData: groupData,
                                        });
                                    }}>
                                    <Image style={styles.pencil} source={require('../../../../assets/icon/pencil.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container4}>
                                <Text style={styles.content}>{groupData.description}</Text>
                                <Image
                                    style={styles.star}
                                    onTouchEnd={() => {
                                        setFirebaseBookmark();
                                    }}
                                    source={
                                        isBookmark
                                            ? require('../../../../assets/icon/bookmarkTrue.png')
                                            : require('../../../../assets/icon/bookmarkFalse.png')
                                    }></Image>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    container2: {
        flexDirection: 'column',
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: metrics.screenWidth,
        alignItems: 'center',
        paddingRight: 18,
    },
    container5: {
        width: '100%',
        height: 256,
    },
    pencil: {
        marginTop: 10,
    },
    star: {
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop: 8,
        marginRight: 8,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    content: {
        fontSize: 16,
        color: colors.white,
        marginLeft: 18,
        marginBottom: 18,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    backBtn: {
        width: 8,
        height: 16,
    },
    backDeleteContainer: {
        paddingHorizontal: 18,
        paddingTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default GroupInfo;
