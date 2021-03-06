import React, {useState } from 'react';
import { TouchableOpacity,Image, StyleSheet, View } from 'react-native';
import colors from '../../../../../theme/colors';
import CustomModal from '../../../../common/CustomModal'
import TiccleCreateImageExpansion from './TiccleCreateImageExpansion';

const TiccleCreateImage = ({deleteTiccleImage ,imagePath, index}) => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [imageExpansion, setImageExpansion] = useState(false)

    const modalTitle = "사진을 삭제하시겠습니까?"
    const modalLeftButton = "뒤로가기"
    const modalRightButton = "삭제"
    const deleteImage = () => {
        deleteTiccleImage(index);
        setDeleteModal(false);
    }

    return (
        <View style={styles.container}>
            <CustomModal title={modalTitle} leftButton={modalLeftButton} rightButton={modalRightButton}
            isModalVisible={deleteModal} setModalVisible={setDeleteModal} rightButtonFunction={deleteImage}/>
            <TiccleCreateImageExpansion
                isModalVisible={imageExpansion} setModalVisible={setImageExpansion} imagePath={imagePath}
                deleteImage={deleteImage}
            />
            <TouchableOpacity
                style={styles.touchableConatiner} onPress={() => setImageExpansion(true)}
                activeOpacity={1}>
                <Image style={styles.image} source={{uri : imagePath}} />            
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.xButtonContainer} onPress={()=>setDeleteModal(true)} activeOpacity={0.75}>
                <Image source={require('../../../../../assets/images/x_circle_sub.png')} style={styles.xButton} />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container : {
        marginRight : 18,
    },
    touchableConatiner : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 82,
        height : 82,
        backgroundColor : colors.gray6,
        borderRadius : 16,

    },
    image : {
        resizeMode : 'cover',
        width: '100%',
        height : '100%',
        borderRadius : 16
    },
    imagePlus : {
        resizeMode: 'cover',
        width : 20,
        height: 20,
    },
    xButtonContainer:{
        position : 'absolute',
        top : -5,
        right : -5,
        width : 24,
        height : 24,
    },
    xButton : {
        width: '100%',
        height: '100%'
    }
})

export default TiccleCreateImage 
