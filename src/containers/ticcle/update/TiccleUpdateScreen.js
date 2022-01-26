import React, { useEffect, useState, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import TiccleUpdateHeader from "./components/header/TiccleUpdateHeader";
import useTiccleUpdate from "../../../context/hook/useTiccleUpdate";
import PhotoModal from "../../common/PhotoModal";
import GroupListModal from "../create/components/group/GroupListModal";
import TiccleCreateGroupSelect from "../create/components/group/TiccleCreateGroupSelect";
import TiccleCreateTextInputTitleLink from "../create/components/textinput/TiccleCreateTextInputTitleLink";
import TiccleContentTextInput from "../create/components/textinput/TiccleContentTextInput";
import TiccleCreateTags from "../create/components/TiccleCreateTags";
import TiccleCreateTextInputTag from "../create/components/textinput/TiccleCreateTextInputTag";
import TiccleCreateImageAdd from "../create/components/image/TiccleCreateImageAdd"

const TiccleUpdateScreen = ({route}) => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, deleteTiccleUpdateImageUrl, setTiccleUpdateImageUrls,
        initialTiccleUpdate, } = useTiccleUpdate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);
    const scrollRef = useRef();
    useEffect(()=> {
        console.log(route);
        const orginalTiccle = route.params.ticcleData;
        setTiccleUpdate(orginalTiccle);
    },[route])
    const setTiccleUpdateImageNamesUrls = imagePath =>{
        setTiccleUpdateImages(imagePath);
        setTiccleUpdateImageUrls(imagePath)
    }
    const deleteTiccleUpdateImageNameUrls = index => {
        deleteTiccleUpdateImage(index);
        deleteTiccleUpdateImageUrl(index);
    }

    return(
        <>
            <TiccleUpdateHeader updateTiccleData={ticcleUpdate}/>
            <ScrollView style={styles.container} ref ={scrollRef}>
                {/* Modal */}
                <PhotoModal setImage={setTiccleUpdateImageNamesUrls} isModalVisible={photoModalVisible}
                    setModalVisible={setPhotoModalVisible}/>
                <GroupListModal
                    isModalVisible={groupListModalVisible} setModalVisible={setGroupListModalVisible}
                    ticcleGroup={ticcleUpdate.groupId} setTiccleGroup={setTiccleUpdateGroup}
                />
                {/* View */}
                <TiccleCreateGroupSelect
                    setGroupListModalVisible={setGroupListModalVisible} ticcleGroupId={ticcleUpdate.groupId}
                />
                <TiccleCreateTextInputTitleLink
                    ticcleTitle={ticcleUpdate.title} ticcleLink={ticcleUpdate.link}
                    setTiccleTitle={setTiccleUpdateTitle} setTiccleLink={setTiccleUpdateLink}
                />
                <TiccleCreateImageAdd
                    setPhotoModalVisible={setPhotoModalVisible}
                    ticcleImages={ticcleUpdate.imageUrl}
                    deleteTiccleImage={deleteTiccleUpdateImageNameUrls}
                />
                <TiccleContentTextInput
                    ticcleContent={ticcleUpdate.content} setTiccleContent={setTiccleUpdateContent}
                />
                <TiccleCreateTextInputTag
                    scrollRef={scrollRef} setTiccleUpdateTagList={setTiccleUpdateTagList}
                />
                <TiccleCreateTags
                    ticcleTags={ticcleUpdate.tagList} deleteTiccleTagList={deleteTiccleUpdateTagList}
                />
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 18
    },
})


export default TiccleUpdateScreen;
