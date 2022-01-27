import { getTiccleIncludeImages } from "../../../../model/TiccleModel";

const getTiccleImageFromFirebase = async(ticcleData, setState) => {
    let tryNumber = 5;
    for(let i = 0; i< tryNumber; i++){
        try{
            const ticcleGetImage = await getTiccleIncludeImages(ticcleData);
            setState(ticcleGetImage);
            return true;
        } catch(error) {
            console.log(error);
        }
    }
}

export {
    getTiccleImageFromFirebase,
}