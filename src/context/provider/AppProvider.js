import React from 'react';
import {useState} from 'react/cjs/react.development';
import AppContext from '../AppContext';
import uuid from 'react-native-uuid';
import { FBDate } from '../../service/CommonService';

const AppProvider = ({children}) => {

    //Ticcle
    const [ticcle, setTiccle] = useState({
        lastModifiedTime: '',
        group: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
    });

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
    const setTiccleDate = () => {
        const today = FBDate();
        setTiccle(state => {
            return {...state, lastModifiedTime: today};
        });
    };
    const setTiccleTagList = tag => {
        if(tag == '') return // 비어있을 경우
        if(tag.trim() == '') return // 공백만 있을 경우 
        setTiccle(state => {
            return {...state, tagList: [...state.tagList, tag.trim()]};
        });
    };
    const deleteTiccleTagList = tag => {
        setTiccle(state => {
            return{ ...state,
            tagList: tagList.filter(tagList => tagList !== tag)
            }
        })
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
    const deleteTiccleImage = imagePath => {
        setTiccle(state => {
            return {
                ...state,
                images: ticcle.images.filter(
                    ticcleImage => ticcleImage !== imagePath,
                ),
            };
        });
    };
    const initialTiccle = () => {
        setTiccle({
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
                ticcle,
                setTiccle,
                setTiccleTitle,
                setTiccleLink,
                setTiccleTagList,
                setTiccleContent,
                setTiccleImages,
                initialTiccle,
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
