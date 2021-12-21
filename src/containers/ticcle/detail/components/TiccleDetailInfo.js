import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailInfo = () => {

    const ticcleDetailDate = "21.12.20"
    const ticcleDetailTitle = "21년의 마무리"

    return(
        <View style={styles.container}>
            <Text style={styles.date}>{ticcleDetailDate}</Text>
            <Text style={styles.title}>{ticcleDetailTitle}</Text>

            <View  style={styles.linkConatiner}>
                <TouchableOpacity style={styles.touchableContainer}>
                    <Text style={styles.linkText}>원본글 가기</Text>
                    <Image source={require('../../../../assets/icon/link.png')} style={styles.linkButton}></Image>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems: 'center',
        height : 150,
        borderBottomWidth : 1,
        borderBottomColor : colors.gray1,
        marginBottom: 18,
    },
    date:{
        marginTop:16,
        fontSize : 16,
        fontFamily : type.spoqaHanSansNeo_Regular,
        color: colors.gray3
    },
    title:{
        marginTop: 2,
        fontSize : 24,
        fontFamily : type.spoqaHanSansNeo_Bold,
    },
    linkConatiner:{
        justifyContent : 'flex-end',
        flexDirection : 'row',
        width : '100%',
        marginTop : 30,
    },
    touchableContainer : {
        flexDirection : 'row',
        paddingRight : 6,
    },
    linkText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 16,
        color : colors.gray5,
        paddingRight: 10,
    },
    linkButton:{
        resizeMode:'contain',
        width: 24,
        height : 24,
    }
})

export default TiccleDetailInfo
