import React,{useState} from "react"
import TiccleCreateContext from "../TiccleCreateContext"

const TiccleCreateProvider = ({children}) => {
    //Ticcle
    const [ticcle, setTiccle] = useState({
        lastModifiedTime: '',
        groupId: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
    });

    const setTiccleGroup = id => {
        setTiccle(state => {
            return{...state, groupId: id};
        })
    };
    const setTiccleTitle = text => {
        setTiccle(state => {
            return {...state, title: text};
        });
    };
    const setTiccleLink = text => {
        setTiccle(state => {
            return {...state, link: text};
        });
    };
    const setTiccleTagList = tag => {
        if (tag == '') return; // 비어있을 경우
        if (tag.trim() == '') return; // 공백만 있을 경우
        setTiccle(state => {
            return {...state, tagList: [...state.tagList, tag.trim()]};
        });
    };
    const deleteTiccleTagList = tag => {
        setTiccle(state => {
            return {
                ...state,
                tagList: state.tagList.filter(tagList => tagList !== tag),
            };
        });

    };
    const setTiccleContent = text => {
        setTiccle(state => {
            return {...state, content: text};
        });
    };
    const setTiccleImages = imagePath => {
        setTiccle(state => {
            return {...state, images: [...state.images, imagePath]};
        });
    };
    const deleteTiccleImage = index => {
        setTiccle(state => {
            state.images.splice(index,1);
            return {
                ...state,
            };
        });
    };
    const initialTiccle = () => {
        setTiccle({
            groupId: '',
            title: '',
            link: '',
            tagList: [],
            content: '',
            images: [],
        });
    };

    return (
        <TiccleCreateContext.Provider
            value={{
                ticcle,
                setTiccle,
                setTiccleGroup,
                setTiccleTitle,
                setTiccleLink,
                setTiccleTagList,
                deleteTiccleTagList,
                setTiccleContent,
                setTiccleImages,
                initialTiccle,
                deleteTiccleImage,
            }}>
            {children}
        </TiccleCreateContext.Provider>
    );
}

export default TiccleCreateProvider
