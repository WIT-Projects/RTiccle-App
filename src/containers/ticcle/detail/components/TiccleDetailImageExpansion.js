import React from 'react';
import Modal from 'react-native-modal'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../../theme/colors';
import metrics from '../../../../theme/metrices';
import { type } from '../../../../theme/fonts';

const TiccleDetailImageExpansion = ({isModalVisible, setModalVisible, imagePath}) => {

    const cancelText = "닫기"

    return(
        <Modal
            isVisible={isModalVisible}
            onBackButtonPress={()=> setModalVisible(false)}
            style={styles.modal}
            >
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <TouchableOpacity
                        style={styles.textTouchable}
                        onPress={()=> setModalVisible(false)}
                    >
                        <Text style={styles.text}>{cancelText}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: imagePath}}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        margin:0
    },
    container:{
        flex:1,
        backgroundColor : colors.main
    },
    tabBar:{
        height: metrics.topNavigationHeight,
        justifyContent: 'center',
        alignItems : 'flex-end',
    },
    textTouchable:{
        alignItems : 'center',
        justifyContent : 'center',
        width : 60,
        height : 40,
        paddingRight : 12,
    },
    text:{
        color: colors.white,
        fontFamily : type.notoSansKR_Regular,
        fontSize:20,
        lineHeight: 24,
    },
    imageContainer:{
        flex : 1,
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})

export default TiccleDetailImageExpansion
