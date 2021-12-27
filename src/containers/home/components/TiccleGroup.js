import React, {useState, useEffect} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { getTiccleCount } from '../../../firebase/Firestore';

const TiccleGroup = ({imgUrl, groupTitle, ticcleTitle}) => {
    const navigateTo = useNavigation();
    const [ticcleCount, setTiccleCount] = useState([]);
    
    useEffect(() => {
        const getCount = getTiccleCount(groupTitle);
        getCount.then((value) => setTiccleCount(value));
    }, []);

    return (
        <View onTouchEnd={() => { navigateTo.navigate('GroupDetail', {groupId: groupTitle}) }}>
            <ImageBackground source={{uri:imgUrl}}
                resizeMode="cover"
                style={styles.container}>
                    <ImageBackground source={require('../../../assets/images/gradation.png')}
                        resizeMode="cover"
                        style={styles.container}>
                            <View style={styles.container3}>
                                <Text style={styles.subFont}>{groupTitle}</Text>
                                <Text style={styles.whiteFont}>최신글</Text>
                                <Text style={styles.whiteFont}>{ticcleTitle}</Text>
                                <View style={styles.container2}><Text style={styles.blackFont}>+{ticcleCount}</Text></View>
                            </View>
                    </ImageBackground>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 140,
    },
    container2:{
        backgroundColor: colors.sub,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 10,
    },
    container3:{
        alignItems: 'flex-end', 
        marginRight: 18, 
        marginVertical: 25,
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
