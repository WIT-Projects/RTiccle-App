import React, {useState} from 'react';
import Modal from 'react-native-modal'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import colors from '../../../../../theme/colors';
import metrics from '../../../../../theme/metrices';
import { type } from '../../../../../theme/fonts';
import CustomModal from '../../../../common/CustomModal';

const TiccleCreateImageExpansion = ({isModalVisible, setModalVisible, imagePath, deleteTiccleImage}) => {

    const [deleteModal, setDeleteModal] = useState(false)
    const cancelText = "닫기"
    const modalTitle = "사진을 삭제하시겠습니까?"
    const modalLeftButton = "뒤로가기"
    const modalRightButton = "삭제"
    const deleteImage = () => {
        deleteTiccleImage(imagePath)
    }

    return(
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={()=> setModalVisible(false)}
            style={styles.modal}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            >
            <View style={styles.container}>
                <CustomModal title={modalTitle} leftButton={modalLeftButton} rightButton={modalRightButton}
                    isModalVisible={deleteModal} setModalVisible={setDeleteModal} rightButtonFunction={deleteImage}/>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.textTouchable} onPress={()=> setModalVisible(false)}>
                        <Text style={styles.text}>{cancelText}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: imagePath}}/>
                </View>

                <TouchableOpacity style={styles.iconTouchable} activeOpacity={0.8} onPress={()=> setDeleteModal(true)}>
                    <Image source={require('../../../../../assets/icon/trashCan.png')} style={styles.icon}/>
                </TouchableOpacity>

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
    },
    iconTouchable:{
        position: 'absolute',
        bottom:10,
        right: 8,
        width:40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'

    },
    icon:{
        width:20,
        height: 22.5,
        resizeMode: 'contain'

    }
})

export default TiccleCreateImageExpansion
