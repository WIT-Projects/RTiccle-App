import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTiccleDetail from '../../../../context/hook/useTiccleDetail';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailText = () => {
    const {ticcleDetail} = useTiccleDetail();
    const content = ticcleDetail.content
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
