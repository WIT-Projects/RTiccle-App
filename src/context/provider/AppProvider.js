import React, {useRef} from 'react';
import {useState} from 'react/cjs/react.development';
import AppContext from '../AppContext';

const AppProvider = ({children}) => {
    const [ticcleCreateText, setTiccleCreateText] = useState({
        title: '',
        link: '',
        tag: '',
        content: '',
    });

    const [ticcleCreateImage, setTiccleCreateImage] = useState([
        {
            id: 0,
            path: '',
        },
    ]);

    const setTitle = text => {
        setTiccleCreateText(state => {
            return {...state, title: text};
        });
    };
    const setLink = text => {
        setTiccleCreateText(state => {
            return {...state, link: text};
        });
    };
    const setTag = text => {
        setTiccleCreateText(state => {
            return {...state, tag: text};
        });
    };
    const setContent = text => {
        setTiccleCreateText(state => {
            return {...state, content: text};
        });
    };

    const imageId = useRef(1);

    const setImage = imagePath => {
        const newImage = {
            id: imageId.current,
            path: imagePath,
        };
        setTiccleCreateImage([...ticcleCreateImage, newImage]);
        imageId.current += 1;
    };

    const setImageDelete = id => {
        setTiccleCreateImage(
            ticcleCreateImage.filter(ticcleImage => ticcleImage.id !== id),
        );
    };

    const [groupCreate, setGroupCreate] = useState({
        lastModifiedTime: '',
        type: '', // integer. BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: '',
        description: '',
        bookmark: false,
        mainImage: '',
    });
    const initialGroupCreate = () => {
        setGroupCreate({
            lastModifiedTime: '',
            type: '', // integer. BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
            title: '',
            description: '',
            bookmark: false,
            mainImage: '',
        });
    };
    const setGroupDate = () => {
        const today = new Date();
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
                setTitle,
                setLink,
                setTag,
                setContent,
                setImage,
                setImageDelete,
                ticcleCreateImage,
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
