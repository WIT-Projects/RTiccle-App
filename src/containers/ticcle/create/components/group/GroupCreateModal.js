import React, { useEffect, useState } from "react";
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from "../../../../../theme/colors";
import GroupCreateModalTitle from "./create/GroupCreateModalTitle";
import GroupCreateModalTextInput from "./create/GroupCreateModalTextInput";
import GroupCreateModalButton from "./create/GroupCreateModalButton";
import { doCreateGroup } from "../../../../../model/GroupModel";
import useGroupChanged from "../../../../../context/hook/useGroupChanged";

const GroupCreateModal = ({isModalVisible, setModalVisible}) => {

    const [groupTitle, setGroupTitle] = useState('');
    const initialTitle = () => {
        setGroupTitle('');
    }
    const [buttonDisable, setButtonDisable] = useState(true);

    const { isGroupChanged, setIsGroupChanged } = useGroupChanged();

    const fastGroupCreateFirebase = async () => {
        const newGroup = {
            type: 0,
            title: groupTitle,
            description: '',
            bookmark: false,
        };
        const imageSource = '';
        await doCreateGroup(newGroup, imageSource);
        console.log('before', isGroupChanged) // temp
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
        console.log('after', isGroupChanged) // temp
    };

    useEffect(() => {
        (groupTitle.length > 0) ? 
        setButtonDisable(false) : setButtonDisable(true)
    },[groupTitle])

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
                <GroupCreateModalTitle initialTitle={initialTitle} setModalVisible={setModalVisible}/>
                {/* <GroupCreateModalGroupType type={type} setType={setType}/> */}
                <GroupCreateModalTextInput groupTitle={groupTitle} setGroupTitle={setGroupTitle}/>
                <GroupCreateModalButton buttonDisable={buttonDisable} fastGroupCreateFirebase={fastGroupCreateFirebase}
                                        initialTitle={initialTitle} setModalVisible={setModalVisible}/>
                
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
