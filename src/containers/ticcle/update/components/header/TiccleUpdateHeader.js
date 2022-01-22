import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../../../../theme/colors'
import { type } from '../../../../../theme/fonts'
import metrics from '../../../../../theme/metrices'
import TiccleUpdateHeaderLeft from './TiccleUpdateHeaderLeft'
import TiccleUpdateHeaderRight from './TiccleUpdateHeaderRight'

const TiccleUpdateHeader = ({updateTiccleData}) => {
    var title = '티끌 수정'

    return(
        <View style={styles.container}>
            <TiccleUpdateHeaderLeft/>
            <Text style={styles.title}>{title}</Text>
            <TiccleUpdateHeaderRight updateTiccleData={updateTiccleData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: metrics.topNavigationHeight,
        backgroundColor: colors.main,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily: type.notoSansKR_Medium,
        color : colors.white,
        fontSize : 20,
        lineHeight : 24,
    }
})

export default TiccleUpdateHeader
