import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../../../../theme/colors'
import { type } from '../../../../../theme/fonts'
import metrics from '../../../../../theme/metrices'
import TiccleDetailHeaderLeft from './TiccleDetailHeaderLeft'
import TiccleDetailHeaderRight from './TiccleDetailHeaderRight'

const TiccleDetailHeader = ({initialTiccleDetail, ticcleDetail}) => {
    var title = '티끌'

    return(
        <View style={styles.container}>
            <TiccleDetailHeaderLeft initialTiccleDetail={initialTiccleDetail}/>
            <Text style={styles.title}>{title}</Text>
            <TiccleDetailHeaderRight ticcleDetail={ticcleDetail}/>
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

export default TiccleDetailHeader
