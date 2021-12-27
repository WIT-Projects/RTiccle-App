import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import colors from '../../theme/colors';
import { type } from '../../theme/fonts';

const CustomModal = ({isModalVisible, setModalVisible, title, leftButton, rightButton,
rightButtonFunction}) => {
    return(
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0.8}
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={()=>setModalVisible(false)}>
                        <Text style={[styles.buttonText,styles.leftButtonText]}>{leftButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={rightButtonFunction}>
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
        borderRadius: 10,
        paddingTop : 16,
        paddingBottom: 11,
    },
    titleContainer:{
        paddingVertical:12,
        paddingLeft: 28
    },
    titleText :{
        fontFamily: type.notoSansKR_Regular,
        fontSize : 16,
        lineHeight : 20,
        color: colors.main
    },
    buttonContainer:{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        marginTop : 18,
        marginBottom : 11,
        marginRight: 18,
    },
    buttonTouchable: {
        paddingHorizontal : 8,
        paddingTop: 4,
        paddingBottom : 5,
    },
    buttonText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        lineHeight: 20,
    },
    leftButtonText:{
        color: colors.gray2
    },
    rightButtonText:{
        color: colors.sub,
    }
})

export default CustomModal
