import React, {useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Linking, Alert } from 'react-native';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailInfo = () => {

    const ticcleDetailDate = "21.12.20"
    const ticcleDetailTitle = "21년의 마무리"
    const urlExample = "https://www.naver.com/"
    const urlExample2 = ""

    const goToURL = () => {
        Linking.openURL(urlExample)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.date}>{ticcleDetailDate}</Text>
            <Text style={styles.title}>{ticcleDetailTitle}</Text>

        {urlExample.length > 0 ? 
        <View  style={styles.linkConatiner}>
            <TouchableOpacity style={styles.touchableContainer} onPress={goToURL}>
                <Text style={styles.linkText}>원본글 가기</Text>
                <Image source={require('../../../../assets/icon/link.png')} style={styles.linkButton}></Image>
            </TouchableOpacity>
        </View>
        : null
    }
            

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems: 'center',
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
        marginBottom : 20,
        fontSize : 24,
        fontFamily : type.spoqaHanSansNeo_Bold,
    },
    linkConatiner:{
        justifyContent : 'flex-end',
        flexDirection : 'row',
        width : '100%',
        marginTop : 10,
        marginBottom : 20,
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
