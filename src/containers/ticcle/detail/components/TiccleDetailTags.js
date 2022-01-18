import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTiccleCreate from '../../../../context/hook/useTiccleCreate';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailTags = () => {
    const {ticcle} = useTiccleCreate();
    const tags = ticcle.tagList
    
    const tagGroup = tags.map(
        (tag, index) => (
            <View key={index} style={styles.tag}>
                <Text style={styles.text}>#{tag}</Text>
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
    text:{
        paddingHorizontal:12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        color: colors.main
    }
})

export default TiccleDetailTags
