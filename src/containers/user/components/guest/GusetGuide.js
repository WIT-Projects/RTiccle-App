import React from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "../../../../theme/colors"

const GuestGuide = () => {
    return(
        <View style={ styles.guideContainer }>
            <Text style={ styles.grayFont }>Guest 모드로 사용 시,</Text>
            <Text style={ styles.grayFont }>앱 삭제 후 재설치를 해도 기존 데이터를 복구할 수 없습니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guideContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        position: 'absolute',
        bottom: 44,
    },
    grayFont:{
        fontSize: 12,
        lineHeight : 24,
        color: colors.gray4,
    },
});

export default GuestGuide
