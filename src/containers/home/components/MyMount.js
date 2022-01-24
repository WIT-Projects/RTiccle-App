import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import { getTotalTiccleNum } from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';

const MyMount = () => {
    const { isGroupChanged } = useGroupChanged();
    const [section, setSection] = useState(0);

    const mountData = [
        { 
            image: require('../../../assets/images/mount1.png'),
            name: "찌끄마한 산"
        },
        { 
            image: require('../../../assets/images/mount2.png'),
            name:"쪼그마한 산"
         },
        { 
            image: require('../../../assets/images/mount3.png'),
            name:"작은 산"
         },
        { 
            image: require('../../../assets/images/mount4.png'),
            name: "뒷산"
         },
        { 
            image: require('../../../assets/images/mount5.png'),
            name:"어엿한 산"
         },
        { 
            image: require('../../../assets/images/mount6.png'),
            name: "태산"
        },
    ]

    useEffect(() => {
        let ticcleCount = getTotalTiccleNum();
        
        if(ticcleCount<=10){
            setSection(0);
        }else if(ticcleCount<=30){
            setSection(1);
        }else if(ticcleCount<=50){
            setSection(2);
        }else if(ticcleCount<=80){
            setSection(3);
        }else if(ticcleCount<=100){
            setSection(4);
        }else{
            setSection(5);
        }
    }, [isGroupChanged]);

    return (
        <>
            <ImageBackground source={mountData[section].image}
                resizeMode="cover"
                style={{ width: "100%", height: 243 }}>
                <View style={styles.container}>
                    <Text style={styles.blackFont}>곧 {mountData[section+1].name}으로 갈 수 있어요.</Text>
                    <Text style={styles.whiteFont}>{mountData[section].name}</Text>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blackFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop: 17,
    },
    whiteFont: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        paddingRight: 14,
        marginBottom: 14,
    }
})


export default MyMount;
