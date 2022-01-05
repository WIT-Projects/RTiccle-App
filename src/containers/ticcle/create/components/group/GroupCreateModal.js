import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import colors from "../../../../../theme/colors";
import { type } from "../../../../../theme/fonts";
import GroupCreateModalTextInput from "./GroupCreateModalTextInput";
import { FBDate } from "../../../../../service/CommonService";
import { uploadNewGroup } from "../../../../../service/GroupService";

const GroupCreateModal = ({isModalVisible, setModalVisible}) => {
    const title = '빠른 그룹 생성';
    const groupType = ['책', '블로그', '뉴스기사', '연재물', 'SNS', '기타'];
    const [type, setType] = useState(10);
    const [groupTitle, setGroupTitle] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);  
    const fastUploadNewGroup = () => {
        const groupName = groupTitle
        const newGroup = {
            lastModifiedTime: FBDate(),
            type: type,
            title: groupName,
            description: '',
            bookmark: false,
        };
        const imageSource = '';
        uploadNewGroup(groupName, newGroup, imageSource)
            .then((ref) => console.log(ref))
    }
    const initialTypeTitle = () => {
        setType(10);
        setGroupTitle('');
    }

    useEffect(() => {
        (type >= 0 && type <6 && groupTitle.length > 0) ? 
        setButtonDisable(false) : setButtonDisable(true)
    },[type, groupTitle])

    return(
        <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
            setModalVisible(false)
            initialTypeTitle()
        }}
        backdropOpacity={0.5}
        style={styles.modal}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        backdropTransitionInTiming={0}
        hideModalContentWhileAnimating={true}
        >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <TouchableOpacity style={styles.xButtonTouchable}
                    onPress={() => {
                        setModalVisible(false)
                        initialTypeTitle()
                        }}>
                        <Image source={require('../../../../../assets/images/x_button.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupTypeContainer}>
                    {groupType.map((groupType, index) => (
                        <TouchableOpacity key={index} onPress={() => setType(index)}
                        style={[styles.groupTypeTocuhable, (index === type) ? styles.selectedType: styles.unSelectedType ]} 
                        >
                            <Text>{groupType}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <GroupCreateModalTextInput groupTitle={groupTitle} setGroupTitle={setGroupTitle}/>
                
                <View style={styles.createTouchableContainer}>
                    <TouchableOpacity disabled={buttonDisable} 
                    style={[styles.createTouchable, buttonDisable ? styles.createTouchableDisable : styles.createTouchableAble]}
                    onPress={() => {
                        fastUploadNewGroup()
                        initialTypeTitle()
                        setModalVisible(false)
                    }}>
                        <Text style={[styles.createText, buttonDisable ? styles.createTextColorDisable : styles.createTextColor]}>
                            그룹생성
                        </Text>
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
        width: '85%',
        height : 400,
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
    groupTypeContainer:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingTop: 35,
    },
    groupTypeTocuhable:{
        paddingVertical: 10,
        paddingHorizontal: 3,
        borderWidth : 1,
        borderRadius: 4,
        borderColor: colors.sub
    },
    selectedType:{
        backgroundColor: colors.sub
    },
    unSelectedType:{
        backgroundColor: colors.white
    },
    createTouchableContainer:{
        alignItems: 'center',
        paddingTop: 80,
    },
    createTouchable:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 40,
        borderRadius: 24,
    },
    createTouchableAble:{
        backgroundColor: colors.main,
    },
    createTouchableDisable:{
        backgroundColor: colors.gray1
    },
    createText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16
    },
    createTextColor:{
        color: colors.white,
    },
    createTextColorDisable:{
        color: colors.gray4
    }

})

export default GroupCreateModal
