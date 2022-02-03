import React, { useEffect, useState, useRef } from "react";
import { ScrollView, StyleSheet, BackHandler } from "react-native";
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
import CustomModal from "../../common/CustomModal";
import Spinner from '../../common/Spinner';

const TiccleUpdateScreen = ({route, navigation}) => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, setTiccleUpdateImageUrl, deleteTiccleUpdateImageUrl,
        initialTiccleUpdate, } = useTiccleUpdate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);
    const [originalTiccle, setOriginalTiccle] = useState({});
    const [cancelModalVisible, setCancelModalVisible] = useState(false);
    const scrollRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        const ticcle = route.params.ticcleData;
        const JSONTiccle = JSON.parse(JSON.stringify(ticcle));
        setTiccleUpdate(JSONTiccle);
        setOriginalTiccle(ticcle);
        //BackButton
        const backButton = () => {
            setCancelModalVisible(true)
            return true;
          };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backButton
        ); 
        return () => backHandler.remove();
    },[])

    const setTiccleUpdateImageNamesUrls = imagePath =>{
        setTiccleUpdateImages(imagePath);
        setTiccleUpdateImageUrl(imagePath)
    }
    const deleteTiccleUpdateImageNameUrls = index => {
        deleteTiccleUpdateImage(index);
        deleteTiccleUpdateImageUrl(index);
    }
    const cancelModalEvent = () => {
        navigation.goBack();
    }

    return(
        <>
            <CustomModal
                isModalVisible={cancelModalVisible} setModalVisible={setCancelModalVisible}
                title={"티끌 수정을 취소하시겠습니까?"} leftButton={"취소"} rightButton={"확인"}
                rightButtonFunction={cancelModalEvent}
            />
            <TiccleUpdateHeader
                ticcleUpdate={ticcleUpdate} originalTiccle={originalTiccle} setIsLoading={setIsLoading}
                setCancelModalVisible = {setCancelModalVisible}
            />
            {isLoading && <Spinner></Spinner>}
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
