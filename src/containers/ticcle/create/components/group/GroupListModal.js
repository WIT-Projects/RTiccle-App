import React,{useState,useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';
import { checkIsExistingAnyGroup, findAllGroup } from '../../../../../service/GroupService';
import GroupCreateModal from './GroupCreateModal';

const GroupListModal = ({isModalVisible, setModalVisible, ticcle ,setTiccleGroup}) => {
    const title = '그룹 선택'
    const [groupCreateModalVisible, setGroupCreateModalVisible] = useState(false)
    const [isExistGroup, setExistGroup] = useState(false);
    const [groupList, setGroupList] = useState([]);

    const isSelectedGroup = group => {
        if(ticcle.group === group) return true;
        return false
    }

    useEffect(() => {
        let getIsExist = checkIsExistingAnyGroup();
        getIsExist.then((value) => {
            setExistGroup(value);
            if(value != 0){
                findAllGroup(setGroupList);
            }
        });
    }, [groupList]);


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
            <GroupCreateModal isModalVisible={groupCreateModalVisible} setModalVisible={setGroupCreateModalVisible}/>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <TouchableOpacity style={styles.xButtonTouchable} onPress={() => {setModalVisible(false)}}>
                        <Image source={require('../../../../../assets/images/x_button.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.groupListViewConatiner}>
                    {isExistGroup ? groupList.map((group, index) => (
                        <Pressable key={index} style={({ pressed }) => [
                            styles.groupNameContainer,
                            isSelectedGroup(group.id)|| pressed ? styles.isSelected : styles.isUnSelected,
                            ]}
                            onPress={() => {
                                setTiccleGroup(group.id)
                                setModalVisible(false)
                            }}
                            disabled={isSelectedGroup(group.id)}
                            >                            
                            <Text style={styles.groupNameText}>{group.id}</Text>
                        </Pressable>))
                        :
                        <View style={styles.groupListNullContainer}>
                            <Text style={styles.groupListNullText}>그룹이 없습니다.</Text>
                        </View>
                    }
                </View>
            </View>
            <TouchableOpacity style={styles.newGroupButtonContainer} onPress={() => setGroupCreateModalVisible(true)}>
                <Image source={require('../../../../../assets/icon/plus_circle.png')} style={styles.newGroupButtonImage}/>
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
        width: '85%',
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
    groupListViewConatiner:{
        marginBottom: 8,
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
    isSelected:{
        backgroundColor: colors.gray6
    },
    isUnSelected:{
        backgroundColor: colors.white
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
