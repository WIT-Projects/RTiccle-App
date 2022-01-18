import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTiccleCreate from '../../../../context/hook/useTiccleCreate';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailText = () => {
    const {ticcle} = useTiccleCreate();
    const content = ticcle.content
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1 ,
        borderBottomColor: colors.gray1,
        marginTop : 10,
    },
    text:{
        marginBottom : 48,
        color : colors.main,
        fontSize: 16,
        fontFamily : type.spoqaHanSansNeo_Regular,
        textAlign : 'left',
        lineHeight : 21
    }
})

export default TiccleDetailText
