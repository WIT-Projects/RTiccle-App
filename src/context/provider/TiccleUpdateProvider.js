import React,{useState} from "react"
import TiccleUpdateContext from "../TiccleUpdateContext";

const TiccleUpdateProvider = ({children}) => {
    //Ticcle
    const [ticcleUpdate, setTiccleUpdate] = useState({
        lastModifiedTime: '',
        groupId: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
        id: ''
    });

    const setTiccleUpdateGroup = id => {
        setTiccleUpdate(state => {
            return{...state, groupId: id};
        })
    };
    const setTiccleUpdateTitle = text => {
        setTiccleUpdate(state => {
            return {...state, title: text};
        });
    };
    const setTiccleUpdateLink = text => {
        setTiccleUpdate(state => {
            return {...state, link: text};
        });
    };
    const setTiccleUpdateTagList = tag => {
        if (tag == '') return; // 비어있을 경우
        if (tag.trim() == '') return; // 공백만 있을 경우
        setTiccleUpdate(state => {
            return {...state, tagList: [...state.tagList, tag.trim()]};
        });
    };
    const deleteTiccleUpdateTagList = tag => {
        setTiccleUpdate(state => {
            return {
                ...state,
                tagList: state.tagList.filter(tagList => tagList !== tag),
            };
        });

    };
    const setTiccleUpdateContent = text => {
        setTiccleUpdate(state => {
            return {...state, content: text};
        });
    };
    const setTiccleUpdateImages = imagePath => {
        setTiccleUpdate(state => {
            return {...state, images: [...state.images, imagePath]};
        });
    };
    const deleteTiccleUpdateImage = index => {
        setTiccleUpdate(state => {
            state.images.splice(index, 1);
            return {
                ...state,
            };
        });
    };
    const setTiccleUpdateImageUrl = imagePath => {
        setTiccleUpdate(state => {
            return {...state, imageUrl: [...state.imageUrl, imagePath]};
        })
    }
    const deleteTiccleUpdateImageUrl = index => {
        setTiccleUpdate(state => {
            state.imageUrl.splice(index,1);
            return {
                ...state
            };
        })
    }

    const initialTiccleUpdate = () => {
        setTiccleUpdate({
            groupId: '',
            title: '',
            link: '',
            tagList: [],
            content: '',
            images: [],
            id: ''
        });
    };

    return (
        <TiccleUpdateContext.Provider
            value={{
                ticcleUpdate,
                setTiccleUpdate,
                setTiccleUpdateGroup,
                setTiccleUpdateTitle,
                setTiccleUpdateLink,
                setTiccleUpdateTagList,
                deleteTiccleUpdateTagList,
                setTiccleUpdateContent,
                setTiccleUpdateImages,
                deleteTiccleUpdateImage,
                setTiccleUpdateImageUrl,
                deleteTiccleUpdateImageUrl,
                initialTiccleUpdate,
            }}>
            {children}
        </TiccleUpdateContext.Provider>
    );
}

export default TiccleUpdateProvider
