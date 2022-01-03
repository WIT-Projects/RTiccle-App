import React from 'react';
import {useState} from 'react/cjs/react.development';
import AppContext from '../AppContext';
import uuid from 'react-native-uuid';
import { FBDate } from '../../service/CommonService';

const AppProvider = ({children}) => {
    const [ticcleCreate, setTiccleCreate] = useState({
        id: '',
        title: '',
        link: '',
        tag: '',
        content: '',
        image: [],
        date: '',
        ticcleNumber: '',
        groupName: '',
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
    const setTiccleTag = text => {
        setTiccleCreate(state => {
            return {...state, tag: text};
        });
    };
    const setTiccleContent = text => {
        setTiccleCreate(state => {
            return {...state, content: text};
        });
    };
    const setTiccleImage = imagePath => {
        const oldImage = ticcleCreate.image;
        const newImage = {
            id: uuid.v4(),
            path: imagePath,
        };
        setTiccleCreate(state => {
            return {...state, image: [...oldImage, newImage]};
        });
    };
    const initialTiccleCreate = () => {
        setTiccleCreate({
            title: '',
            link: '',
            tag: '',
            content: '',
            image: [],
            date: '',
            ticcleNumber: '',
            groupName: '',
        });
    };
    const deleteTiccleImage = id => {
        setTiccleCreate(state => {
            return {
                ...state,
                image: ticcleCreate.image.filter(
                    ticcleImage => ticcleImage.id !== id,
                ),
            };
        });
    };
    const setTiccleDate = () => {
        const today = FBDate();
        setTiccleCreate(state => {
            return {...state, date: today};
        });
    };

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
                setTiccleTag,
                setTiccleContent,
                setTiccleImage,
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
