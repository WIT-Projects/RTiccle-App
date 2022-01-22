import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleCreateTags = ({ticcleTags, deleteTiccleTagList}) => {

    const tagGroup = ticcleTags.map(
        (tag, index) => (
            <View key={index} style={styles.tag}>
                <Text style={styles.text}>#{tag}</Text>
                <TouchableOpacity style={styles.buttonTouchable} activeOpacity={0.6}
                                    onPress={() => deleteTiccleTagList(tag)}>
                    <Image source={require('../../../../assets/images/x_circle_sub.png')} style={styles.xButton}/>
                </TouchableOpacity>

            </View>
    ))

    return(
        <View style={styles.container}>
            {tagGroup}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        marginTop : 10,
        marginBottom: 30,
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    tag:{
        height:30,
        alignItems: 'center',
        justifyContent : 'center',
        marginRight : 10,
        marginTop : 10,
        borderWidth : 1.5,
        borderColor : colors.sub,
        borderRadius: 24,
    },
    buttonTouchable:{
        position: 'absolute',
        top: -11,
        right: -12,  
        width:24,
        height:24,
    },
    xButton:{
        width:'100%',
        height: '100%',
        resizeMode: 'contain'
    },
    text:{
        paddingHorizontal:12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        color: colors.main
    }
})

export default TiccleCreateTags
