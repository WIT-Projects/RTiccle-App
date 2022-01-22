import React,{useState} from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import CustomModal from '../../../../common/CustomModal';

const TiccleUpdateHeaderLeft = () => {
    const navigateTo = useNavigation();
    const [cancelModalVisible, setCancelModalVisible] = useState(false);
    const cancelModalEvent = () => {
        navigateTo.goBack();
    }
    
    return (
        <>
        <CustomModal
                isModalVisible={cancelModalVisible} setModalVisible={setCancelModalVisible}
                title={"티끌 수정을 취소하시겠습니까?"} leftButton={"취소"} rightButton={"확인"}
                rightButtonFunction={cancelModalEvent}
        />
        <TouchableOpacity
            style={styles.headerLeftTouchable}
            onPress={() => {
                setCancelModalVisible(true)
            }}>
                <Image source={require('../../../../../assets/images/chevron_left.png')}
                        style={styles.headerLeftImage}
                />
        </TouchableOpacity>            
        </>

    )
}

const styles = StyleSheet.create({
    headerLeftTouchable :{
        position: 'absolute',
        left: 0,
        top: 9, 
        alignItems: 'center',
        justifyContent : 'center',
        width: 40,
        height : 40,
        paddingLeft: 6,
    },
    headerLeftImage : {
        resizeMode : 'cover',
        width : 12, 
        height: 20, 
        tintColor : colors.white
    },
})

export default TiccleUpdateHeaderLeft
