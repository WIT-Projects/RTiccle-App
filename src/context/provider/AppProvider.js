import React from 'react';
import {useState} from 'react/cjs/react.development';
import AppContext from '../AppContext';
import uuid from 'react-native-uuid';
import { FBDate } from '../../service/CommonService';

const AppProvider = ({children}) => {

    //Ticcle
    const [ticcleCreate, setTiccleCreate] = useState({
        lastModifiedTime: '',
        group: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
    });

    const setTiccleTitle = text => {
        setTiccleCreate(state => {
            return {...state, title: text};
        });
    };
    const setTiccleLink = text => {
        setTiccleCreate(state => {
            return {...state, link: text};
        });
    };
    const setTiccleDate = () => {
        const today = FBDate();
        setTiccleCreate(state => {
            return {...state, lastModifiedTime: today};
        });
        console.log(ticcleCreate)
    };
    const setTiccleTagList = tag => {
        if(tag == '') return // 비어있을 경우
        if(tag.trim() == '') return // 공백만 있을 경우 
        setTiccleCreate(state => {
            return {...state, tagList: [...state.tagList, tag.trim()]};
        });
    };
    const deleteTiccleTagList = tag => {
        setTiccleCreate(state => {
            return{ ...state,
            tagList: tagList.filter(tagList => tagList !== tag)
            }
        })
    };
    const setTiccleContent = text => {
        setTiccleCreate(state => {
            return {...state, content: text};
        });
    };
    const setTiccleImages = imagePath => {
        setTiccleCreate(state => {
            return {...state, images: [...state.images, imagePath]};
        });
    };
    const deleteTiccleImage = imagePath => {
        setTiccleCreate(state => {
            return {
                ...state,
                images: ticcleCreate.images.filter(
                    ticcleImage => ticcleImage !== imagePath,
                ),
            };
        });
    };
    const initialTiccleCreate = () => {
        setTiccleCreate({
            lastModifiedTime: '',
            group: '',
            title: '',
            link: '',
            tagList: [],
            content: '',
            images: [],
        });
    };


    // Group
    const [groupCreate, setGroupCreate] = useState({
        lastModifiedTime: '',
        type: '', // integer. BOOK(0), BLOG(1), NEWS(2), SERIAL(3), SNS(4), ETC(5)
        title: '',
        description: '',
        bookmark: false,
        mainImage: '',
    });
    const initialGroupCreate = () => {
        setGroupCreate({
            lastModifiedTime: '',
            type: '', // integer. BOOK(0), BLOG(1), NEWS(2), SERIAL(3), SNS(4), ETC(5)
            title: '',
            description: '',
            bookmark: false,
            mainImage: '',
        });
    };
    const setGroupDate = () => {
        const today = FBDate();
        setGroupCreate(state => {
            return {...state, date: today};
        });
    };
    const setGroupType = num => {
        setGroupCreate(state => {
            return {...state, type: num};
        });
    };
    const setGroupTitle = text => {
        setGroupCreate(state => {
            return {...state, title: text};
        });
    };
    const setGroupDescription = text => {
        setGroupCreate(state => {
            return {...state, description: text};
        });
    };
    const setGroupBookmark = bool => {
        setGroupCreate(state => {
            return {...state, bookmark: bool};
        });
    };
    const setGroupImage = imgPath => {
        setGroupCreate(state => {
            return {...state, mainImage: imgPath};
        });
    };

    return (
        <AppContext.Provider
            value={{
                ticcleCreate,
                setTiccleCreate,
                setTiccleTitle,
                setTiccleLink,
                setTiccleTagList,
                setTiccleContent,
                setTiccleImages,
                initialTiccleCreate,
                deleteTiccleImage,
                setTiccleDate,
                groupCreate,
                setGroupCreate,
                initialGroupCreate,
                setGroupDate,
                setGroupType,
                setGroupTitle,
                setGroupDescription,
                setGroupBookmark,
                setGroupImage,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
