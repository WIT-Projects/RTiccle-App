import React from "react";
import { View, Text, Pressable,  StyleSheet } from "react-native";
import colors from "../../../../../../theme/colors";
import { type } from "../../../../../../theme/fonts";

const GroupListModalGroupList = ({groupList, setModalVisible, isExistGroup, setTiccleGroup , ticcleGroup}) => {

    const isSelectedGroup = group => {
        if(ticcleGroup === group) return true;
        return false
    }

    return(
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
    )
}

const styles = StyleSheet.create({
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
})

export default GroupListModalGroupList
