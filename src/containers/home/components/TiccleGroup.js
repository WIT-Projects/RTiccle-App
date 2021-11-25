import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

const TiccleGroup = ({imgUrl, groupTitle, ticcleTitle, count}) => {
    return (
        <>
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
        fontFamily : fonts.type.spoqaHanSansNeo,
        fontSize : 16,
        color: colors.sub,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    whiteFont:{
        fontFamily : fonts.type.spoqaHanSansNeo,
        fontSize : 12,
        color: colors.white,
        marginBottom: 6,
    },
    blackFont:{
        fontFamily : fonts.type.spoqaHanSansNeo,
        fontSize : 12,
    },
})


export default TiccleGroup;
