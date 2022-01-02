import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';
import { useNavigation } from '@react-navigation/native';
import { updateGroupInfo, findGroupByIdIncludeImage } from "../../../../service/GroupService";

const GroupInfo = ({ title }) => {
    const navigateTo = useNavigation();
    const [groupData, setGroupData] = useState([]);
    const [isBookmark, setIsBookmark] = useState(0);

    const imageData = [
        {
            image: require('../../../../assets/icon/star.png') 
        },
        { 
            image: require('../../../../assets/icon/bookMark.png')
        }
    ];

    function setFirebaseBookmark() {
        if (isBookmark == 1) {
            setIsBookmark(0);
            updateGroupInfo(title, { bookmark: false });
        } else {
            setIsBookmark(1);
            updateGroupInfo(title, { bookmark: true });
        }
    };

    useEffect(() => {
        // get group data
        findGroupByIdIncludeImage(title, setGroupData);
        console.log(groupData);

        if (groupData.bookmark) {
            setIsBookmark(1);
        } else {
            setIsBookmark(0);
        }
    }, []);

    return (
        <>
            <ImageBackground source={{ uri: groupData.imageUrl }}
                resizeMode="cover"
                style={styles.container5}>
                <ImageBackground source={require('../../../../assets/images/gradation2.png')}
                    resizeMode="cover"
                    style={styles.container5}>
                    <Image style={styles.backBtn}
                        onTouchEnd={() => { navigateTo.navigate('Home') }}
                        source={require('../../../../assets/icon/backWhite.png')} />
                    <View style={styles.container}>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Text style={styles.title}>{title}</Text>
                                <Image style={styles.pencil} source={require('../../../../assets/icon/pencil.png')}></Image>
                            </View>
                            <View style={styles.container4}>
                                <Text style={styles.content}>{groupData.description}</Text>
                                <Image style={styles.star} onTouchEnd={() => { setFirebaseBookmark() }} source={imageData[isBookmark].image}></Image>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </>
    )
}

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
        width: "100%",
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
        marginLeft: 18,
        marginTop: 21,
    }
})

export default GroupInfo;
