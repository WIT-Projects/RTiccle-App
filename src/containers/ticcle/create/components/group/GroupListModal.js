import React,{useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../../../../theme/colors';
import GroupCreateModal from './GroupCreateModal';
import GroupListModalTitle from './list/GroupListModalTitle';
import GroupListModalGroupList from './list/GroupListModalGroupList';
import GroupListModalCreateButton from './list/GroupListModalCreateButton';
import { groupList } from '../../../../../model/GroupModel';
import useGroupChanged from '../../../../../context/hook/useGroupChanged';

const GroupListModal = ({isModalVisible, setModalVisible, ticcle ,setTiccleGroup}) => {
    const [groupCreateModalVisible, setGroupCreateModalVisible] = useState(false)
    const [groupData, setGroupData] = useState([]);
    const [isExistGroup, setExistGroup] = useState(false);

    const { isGroupChanged } = useGroupChanged();

    useEffect(() => {
        setExistGroup(groupList.length != 0);
        setGroupData(groupList); // TODO sorting
    }, [isGroupChanged]);


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
            {/* Modal */}
            <GroupCreateModal isModalVisible={groupCreateModalVisible} setModalVisible={setGroupCreateModalVisible}/>
            {/* View */}
            <View style={styles.container}>
                <GroupListModalTitle setModalVisible={setModalVisible}/>
                <GroupListModalGroupList groupData = {groupData} setModalVisible={setModalVisible} 
                    isExistGroup = {isExistGroup}  setTiccleGroup={setTiccleGroup} ticcleGroup={ticcle.groupId}/>
            </View>
            <GroupListModalCreateButton setGroupCreateModalVisible={setGroupCreateModalVisible}/>
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
