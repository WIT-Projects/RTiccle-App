import { doUpdateTiccle } from "../../../../model/TiccleModel";

const TiccleUpdateFirebase = async (ticcleUpdate, originalTiccle) => {

    let groupId = originalTiccle.groupId;
    let ticcleId = originalTiccle.id;
    let newInfo = [];
    let isIncludingImage = false;
    let images = [];
    let oldImageNames = [];
    let newImageSources = [];

    if(ticcleUpdate.title != originalTiccle.title) newInfo.title = ticcleUpdate.title;
    if(ticcleUpdate.link != originalTiccle.link) newInfo.link = ticcleUpdate.link;
    if(ticcleUpdate.content != originalTiccle.content) newInfo.content = ticcleUpdate.content;
    if(ticcleUpdate.groupId != originalTiccle.groupId) newInfo.groupId = ticcleUpdate.groupId;
    if(JSON.stringify(ticcleUpdate.tagList) != JSON.stringify(originalTiccle.tagList)) {
        newInfo.tagList = ticcleUpdate.tagList;
    }

    let updateImages = ticcleUpdate.images;
    let orginalImages = originalTiccle.images;
    // updateImages - originalImages 차집합
    const differenceUpdate = updateImages.filter(image => !orginalImages.includes(image));
    // originalImages - updateImages 차집합
    const differenceOriginal = orginalImages.filter(image => !updateImages.includes(image));

    oldImageNames = differenceOriginal;
    newImageSources = differenceUpdate;
    isIncludingImage = (JSON.stringify(updateImages) == JSON.stringify(orginalImages)) ? false : true; 

    const updatedTiccleData = await doUpdateTiccle(groupId, ticcleId, newInfo,
        isIncludingImage, images,oldImageNames, newImageSources);

    return updatedTiccleData;
}

export {TiccleUpdateFirebase}
