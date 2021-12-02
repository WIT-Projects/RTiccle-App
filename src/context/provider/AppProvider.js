import React, { useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import AppContext from '../AppContext';

const AppProvider = ({children}) => {


    const [ticcleCreateText, setTiccleCreateText] = useState({
        title: '',
        link: '',
        tag : '',
        content : '',
    })

    const [ticcleCreateImage, setTiccleCreateImage] = useState([{
        id : 0,
        path : ''
    },
])

    const setTitle = (text) => {
        setTiccleCreateText(state => {return {...state, title: text}})
    }
    const setLink = (text) => {
        setTiccleCreateText(state => {return {...state, link: text}})
    }
    const setTag = (text) => {
        setTiccleCreateText(state => {return {...state, tag: text}})
    }
    const setContent = (text) => {
        setTiccleCreateText(state => {return { ...state, content: text}})
    }

    const imageId = useRef(1);

    const setImage = (imagePath) => {
        const newImage = {
            id :imageId.current,
            path : imagePath
        }
        setTiccleCreateImage([...ticcleCreateImage , newImage])
        imageId.current += 1;
    }


    const setImageDelete = (id) => {
        setTiccleCreateImage(ticcleCreateImage.filter(ticcleImage => ticcleImage.id !== id) ) 
    }



    return(
        <AppContext.Provider value={{setTitle, setLink, setTag, setContent, setImage, setImageDelete, ticcleCreateImage}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

