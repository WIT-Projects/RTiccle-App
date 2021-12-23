import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';

const TiccleGroup = ({imgUrl, groupTitle, ticcleTitle, count}) => {
    const navigateTo = useNavigation();

    return (
        <>
        <View onTouchEnd={() => { navigateTo.navigate('GroupDetail', {groupId: groupTitle}) }}>
            <ImageBackground source={{uri:imgUrl}}
                resizeMode="cover"
                style={{ width: "100%", height: 140 }}>
                    <ImageBackground source={require('../../../assets/images/gradation.png')}
                        resizeMode="cover"
                        style={{ width: "100%", height: 140 }}>
                            <View style={{alignItems: 'flex-end', marginRight: 18, marginVertical: 25}}>
                                <Text style={styles.subFont}>{groupTitle}</Text>
                                <Text style={styles.whiteFont}>최신글</Text>
                                <Text style={styles.whiteFont}>{ticcleTitle}</Text>
                                <View style={styles.container2}><Text style={styles.blackFont}>+{count}</Text></View>
                            </View>
                    </ImageBackground>
            </ImageBackground>
        </View>
        </>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    container2:{
        backgroundColor: colors.sub,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 10,
    },
    subFont:{
        fontFamily : type.spoqaHanSansNeo_Bold,
        fontSize : 16,
        color: colors.sub,
        marginBottom: 6,
    },
    whiteFont:{
        fontFamily : type.spoqaHanSansNeo_Regular,
        fontSize : 12,
        color: colors.white,
        marginBottom: 6,
    },
    blackFont:{
        fontFamily : type.spoqaHanSansNeo_Regular,
        fontSize : 12,
    },
})


export default TiccleGroup;
