import React, { useEffect, useState } from "react";
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from "../../../../../theme/colors";
import GroupCreateModalTitle from "./create/GroupCreateModalTitle";
import GroupCreateModalTextInput from "./create/GroupCreateModalTextInput";
import GroupCreateModalGroupType from "./create/GroupCreateModalGroupType";
import GroupCreateModalButton from "./create/GroupCreateModalButton";
import { uploadNewGroup } from "../../../../../service/GroupService";

const GroupCreateModal = ({isModalVisible, setModalVisible}) => {
    const [type, setType] = useState(10);
    const initialTypeTitle = () => {
        setType(10);
        setGroupTitle('');
    }
    const [groupTitle, setGroupTitle] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);

    const fastUploadNewGroup = () => {
        const groupName = groupTitle
        const newGroup = {
            type: type,
            title: groupName,
            description: '',
            bookmark: false,
        };
        const imageSource = '';
        uploadNewGroup(groupName, newGroup, imageSource)
            .then((ref) => console.log(ref))
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
                <GroupCreateModalTitle initialTypeTitle={initialTypeTitle} setModalVisible={setModalVisible}/>
                <GroupCreateModalGroupType type={type} setType={setType}/>
                <GroupCreateModalTextInput groupTitle={groupTitle} setGroupTitle={setGroupTitle}/>
                <GroupCreateModalButton buttonDisable={buttonDisable} fastUploadNewGroup={fastUploadNewGroup}
                                        initialTypeTitle={initialTypeTitle} setModalVisible={setModalVisible}/>
                
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

})

export default GroupCreateModal
