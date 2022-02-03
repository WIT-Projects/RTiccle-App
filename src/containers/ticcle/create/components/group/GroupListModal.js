import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../../../../theme/colors';
import GroupListModalTitle from './list/GroupListModalTitle';
import GroupListModalGroupList from './list/GroupListModalGroupList';
import GroupListModalCreateButton from './list/GroupListModalCreateButton';

const GroupListModal = ({groupListModalVisible, setGroupListModalVisible, ticcleGroup, setTiccleGroup
, setGroupCreateModalVisible}) => {

    return(
        <Modal
            isVisible={groupListModalVisible}
            onBackdropPress={() => setGroupListModalVisible(false)}
            backdropOpacity={0.5}
            style={styles.modal}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropTransitionInTiming={0}
            hideModalContentWhileAnimating={true}
        >
            {/* View */}
            <View style={styles.container}>
                <GroupListModalTitle setModalVisible={setGroupListModalVisible}/>
                <GroupListModalGroupList
                    setModalVisible={setGroupListModalVisible}
                    ticcleGroup={ticcleGroup} setTiccleGroup={setTiccleGroup}
                />
            </View>
            <GroupListModalCreateButton
                setGroupCreateModalVisible={setGroupCreateModalVisible}
                setGroupListModalVisible={setGroupListModalVisible}
            />
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
        backgroundColor: colors.white,
        borderRadius: 10,
    },
})

export default GroupListModal
