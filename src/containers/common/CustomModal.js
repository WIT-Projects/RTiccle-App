import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/colors';
import { type } from '../../theme/fonts';

const CustomModal = ({isModalVisible, setModalVisible, title, leftButton, rightButton,
rightButtonFunction, rightButtonStyle, warning}) => {
    return(
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0.5}
            style={styles.modal}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropTransitionInTiming={0}
            hideModalContentWhileAnimating={true}
        >
            <View style={styles.container}>
                {warning ?
                <View style={styles.warningContainer}>
                    <Text style={styles.warningText}>주의</Text>
                </View>
                : null}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={()=>setModalVisible(false)}>
                        <Text style={[styles.buttonText,styles.leftButtonText]}>{leftButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonTouchable, rightButtonStyle]} onPress={rightButtonFunction}>
                        <Text style={[styles.buttonText, styles.rightButtonText]}>{rightButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal :{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    container:{
        width: '75%',
        backgroundColor: colors.white,
        borderRadius: 6,
        paddingTop : 16,
        paddingBottom: 5,
    },
    warningContainer:{
        alignItems: 'center',
        paddingVertical: 4
    },
    warningText:{
        fontFamily: type.spoqaHanSansNeo_Bold,
        color: colors.red,
        fontSize: 16
    },
    titleContainer:{
        alignItems: 'center',
        paddingVertical: 16,
    },
    titleText :{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 16,
        lineHeight : 20,
        color: colors.main,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal: 4,

    },
    buttonTouchable: {
        width:'50%',
        paddingTop: 16,
        paddingBottom: 19,
        alignItems: 'center',
    },
    buttonText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        lineHeight: 20,
    },
    leftButtonText:{
        color: colors.gray4
    },
    rightButtonText:{
        fontFamily: type.spoqaHanSansNeo_Bold,
        color: colors.sub,
    }
})

export default CustomModal
