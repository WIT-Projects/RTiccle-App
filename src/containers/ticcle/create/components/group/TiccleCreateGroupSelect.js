import React,{useState, useEffect} from "react";
import { Text, TouchableOpacity,StyleSheet, Image } from "react-native";
import colors from "../../../../../theme/colors";
import { type } from "../../../../../theme/fonts";
import { getGroupTitleByGId } from "../../../../../model/GroupModel";

const TiccleCreateGroupSelect = ({setGroupListModalVisible, ticcleGroupId}) => {
    const [ticcleGroupTitle, setTiccleGroupTitle] = useState('')
    useEffect(()=> {
        getGroupTitleByGId(ticcleGroupId, setTiccleGroupTitle);
    }
    ,[ticcleGroupId])
    const groupName = !!(ticcleGroupTitle) ? ticcleGroupTitle : '그룹을 선택해주세요' 
    
    return(
        <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => setGroupListModalVisible(true)}>
            <Text style={styles.text}>
                {groupName}
            </Text>
            <Image source={require('../../../../../assets/images/chevron_down.png')} style={styles.image}/>
        </TouchableOpacity>
    )
}
 
const styles = StyleSheet.create({
    touchable:{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        borderBottomColor : colors.gray1,
        borderBottomWidth : 1,
        marginTop: 6,
        height : 59,
        paddingHorizontal: 6,
        paddingTop : 1,
    },
    text:{
        color: colors.main,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 18,
    },
    image:{
        width:24,
        height:24,
        resizeMode: 'contain'
    }
})

export default TiccleCreateGroupSelect
