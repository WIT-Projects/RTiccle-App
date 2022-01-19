import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../../../../../theme/colors'
import { type } from '../../../../../theme/fonts'
import metrics from '../../../../../theme/metrices'
import TiccleCreateHeaderLeft from './TiccleCreateHeaderLeft'
import TiccleCreateHeaderRight from './TiccleCreateHeaderRight'

const TiccleCreateHeader = ({isUpdateMode, setIsUpdateMode}) => {

    var title = isUpdateMode ? '티끌 수정' : '티끌 작성'

    return(
        <View style={styles.container}>
            <TiccleCreateHeaderLeft setIsUpdateMode={setIsUpdateMode}/>
            <Text style={styles.title}>{title}</Text>
            <TiccleCreateHeaderRight isUpdateMode={isUpdateMode}/>
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

export default TiccleCreateHeader
