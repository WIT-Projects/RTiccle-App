import React,{useState} from "react"
import TiccleDetailContext from "../TiccleDetailContext";

const TiccleDetailProvider = ({children}) => {
    //Ticcle
    const [ticcleDetail, setTiccleDetail] = useState({
        lastModifiedTime: '',
        groupId: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
    });

    const setTiccleDetailGroup = id => {
        setTiccleDetail(state => {
            return{...state, groupId: id};
        })
    };
    const setTiccleDetailTitle = text => {
        setTiccleDetail(state => {
            return {...state, title: text};
        });
    };
    const setTiccleDetailLink = text => {
        setTiccleDetail(state => {
            return {...state, link: text};
        });
    };
    const setTiccleDetailTagList = tag => {
        if (tag == '') return; // 비어있을 경우
        if (tag.trim() == '') return; // 공백만 있을 경우
        setTiccleDetail(state => {
            return {...state, tagList: [...state.tagList, tag.trim()]};
        });
    };
    const deleteTiccleDetailTagList = tag => {
        setTiccleDetail(state => {
            return {
                ...state,
                tagList: state.tagList.filter(tagList => tagList !== tag),
            };
        });

    };
    const setTiccleDetailContent = text => {
        setTiccleDetail(state => {
            return {...state, content: text};
        });
    };
    const setTiccleDetailImages = imagePath => {
        setTiccleDetail(state => {
            return {...state, images: [...state.images, imagePath]};
        });
    };
    const deleteTiccleDetailImage = imagePath => {
        setTiccleDetail(state => {
            return {
                ...state,
                images: ticcle.images.filter(
                    ticcleImage => ticcleImage !== imagePath,
                ),
            };
        });
    };
    const initialTiccleDetail = () => {
        setTiccleDetail({
            groupId: '',
            title: '',
            link: '',
            tagList: [],
            content: '',
            images: [],
        });
    };

    return (
        <TiccleDetailContext.Provider
            value={{
                ticcleDetail,
                setTiccleDetail,
                setTiccleDetailGroup,
                setTiccleDetailTitle,
                setTiccleDetailLink,
                setTiccleDetailTagList,
                deleteTiccleDetailTagList,
                setTiccleDetailContent,
                setTiccleDetailImages,
                initialTiccleDetail,
                deleteTiccleDetailImage,
            }}>
            {children}
        </TiccleDetailContext.Provider>
    );
}

export default TiccleDetailProvider
