import React, { useEffect, useState, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import TiccleUpdateHeader from "./components/header/TiccleUpdateHeader";
import useTiccleUpdate from "../../../context/hook/useTiccleUpdate";
import PhotoModal from "../../common/PhotoModal";
import GroupListModal from "../create/components/group/GroupListModal";
import TiccleCreateGroupSelect from "../create/components/group/TiccleCreateGroupSelect";
import TiccleCreateTextInputTitleLink from "../create/components/textinput/TiccleCreateTextInputTitleLink";
import TiccleCreateImageAdd from "../create/components/image/TiccleCreateImageAdd";
import TiccleContentTextInput from "../create/components/textinput/TiccleContentTextInput";
import TiccleCreateTags from "../create/components/TiccleCreateTags";
import TiccleCreateTextInputTag from "../create/components/textinput/TiccleCreateTextInputTag";
import Spinner from '../../common/Spinner';

const TiccleUpdateScreen = ({route}) => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, setTiccleUpdateImageUrl, deleteTiccleUpdateImageUrl,
        initialTiccleUpdate, } = useTiccleUpdate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);
    const [originalTiccle, setOriginalTiccle] = useState({});
    const scrollRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        const ticcle = route.params.ticcleData;
        const JSONTiccle = JSON.parse(JSON.stringify(ticcle));
        setTiccleUpdate(JSONTiccle);
        setOriginalTiccle(ticcle);
    },[])

    const setTiccleUpdateImageNamesUrls = imagePath =>{
        setTiccleUpdateImages(imagePath);
        setTiccleUpdateImageUrl(imagePath)
    }
    const deleteTiccleUpdateImageNameUrls = index => {
        deleteTiccleUpdateImage(index);
        deleteTiccleUpdateImageUrl(index);
    }

    return(
        <>
            {isLoading && <Spinner></Spinner>}
            <TiccleUpdateHeader ticcleUpdate={ ticcleUpdate } originalTiccle={ originalTiccle } setIsLoading={ setIsLoading }/>
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
                    ticcleImages={ticcleUpdate.imageUrl} deleteTiccleImage={deleteTiccleUpdateImageNameUrls}
                />
                <TiccleContentTextInput
                    ticcleContent={ticcleUpdate.content} setTiccleContent={setTiccleUpdateContent}
                />
                <TiccleCreateTextInputTag
                    scrollRef={scrollRef} setTiccleTagList={setTiccleUpdateTagList}
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
