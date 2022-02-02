import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, ScrollView} from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import Modal from 'react-native-modal';
import { getPrivacyPolicy } from '../../../service/CommonService';

const PrivacyModal = ({isModalVisible, setModalVisible }) => {

    const [privacyPolicy, setPrivacyPolicy] = useState('');

    useEffect(() => {
        (async() => {
            const policy = await getPrivacyPolicy();
            const policyReplace = policy.replace(/\\n+/g, '\n');
            setPrivacyPolicy(policyReplace);
        })();
    },[])

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
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        개인정보처리방침
                    </Text>
                    <TouchableOpacity
                        style={styles.buttonTouchable}
                        onPress={() => setModalVisible(false)}
                    >
                        <Image
                            source={require('../../../assets/images/x_button.png')}
                            style={styles.button}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.policyText}>
                        {privacyPolicy}
                    </Text>
                </ScrollView>                
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
        width: '82%',
        aspectRatio: 0.6,
        backgroundColor: colors.white,
        borderRadius: 6,
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height:72,
        marginBottom: 8,
    },
    title:{
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 16,
    },
    buttonTouchable:{
        position:'absolute',
        top: 28,
        right: 18,
        width: 15,
        height: 15,
    },
    button: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    scrollContainer:{
        paddingHorizontal : 18,
    },
    policyText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 12,
        lineHeight: 24,
    }
})

export default PrivacyModal
