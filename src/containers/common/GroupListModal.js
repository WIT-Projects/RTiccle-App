import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';

import colors from '../../theme/colors';
import { type } from '../../theme/fonts';

const GroupListModal = ({groupList, isModalVisible, setModalVisible}) => {
    const title = '그룹 선택'

    const groupIsEmpty = Array.isArray(groupList) && groupList.length === 0;

    const groupListNull = (
            <View style={styles.groupListNullContainer}>
                <Text style={styles.groupListNullText}>그룹이 없습니다.</Text>
            </View>)
    const groupListView = groupList.map(
        (groupName, index) => (
            <Pressable key={index} style={({ pressed }) => [
                { backgroundColor: pressed ? colors.gray6: colors.white},
                styles.groupNameContainer
              ]}>
                <Text style={styles.groupNameText}>{groupName}</Text>
            </Pressable>
        )
    )

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
                    <Text style={styles.titleText}>{title}</Text>
                    <TouchableOpacity style={styles.xButtonTouchable} onPress={() => setModalVisible(false)}>
                        <Image source={require('../../assets/images/x_button.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{marginBottom: 8}}>
                    {groupIsEmpty ? groupListNull : groupListView}
                </View>
            </View>
            <TouchableOpacity style={styles.newGroupButtonContainer}>
                <Image source={require('../../assets/icon/plus_circle.png')} style={styles.newGroupButtonImage}/>
                <Text style={styles.newGroupButtonText}>새로운 그룹 생성하기</Text>
            </TouchableOpacity>
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
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height : 68,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray1
    },
    titleText :{
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize : 18,
        color: colors.main
    },
    xButtonTouchable:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent : 'center',
        top: 18,
        right : 26,
        width: 30,
        height : 30
    },
    image:{
        width : 15,
        height: 15,
        resizeMode : 'contain'
    },
    groupListNullContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 68,
    },
    groupListNullText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16
    },
    groupNameContainer:{
        height: 48,
        justifyContent: 'center'
    },
    groupNameText:{
        paddingLeft: 21,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 18,
    },
    newGroupButtonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    newGroupButtonImage:{
        resizeMode: 'contain',
        width:31,
        height: 31
    },
    newGroupButtonText:{
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        
    }

    
})

export default GroupListModal
