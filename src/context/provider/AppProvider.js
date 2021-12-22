import React from 'react';
import { useState } from 'react/cjs/react.development';
import AppContext from '../AppContext';
import uuid from 'react-native-uuid'

const AppProvider = ({children}) => {


    const [ticcleCreateText, setTiccleCreateText] = useState({
        title: '',
        link: '',
        tag : '',
        content : '',
    })

    const [ticcleCreateImage, setTiccleCreateImage] = useState([])

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
    const setTextDeleteAll = () => {
        setTiccleCreateText({
            title: '',
            link: '',
            tag : '',
            content : '',
        })
    }

    const setImage = (imagePath) => {
        const newImage = {
            id : uuid.v4(),
            path : imagePath
        }
        setTiccleCreateImage([...ticcleCreateImage , newImage])
    }

    const setImageDelete = (id) => {
        setTiccleCreateImage(ticcleCreateImage.filter(ticcleImage => ticcleImage.id !== id) ) 
    }

    const setImageDeleteAll = () => {
        setTiccleCreateImage([])
    }


    return(
        <AppContext.Provider value={{setTitle, setLink, setTag, setContent, setImage, setImageDelete, setImageDeleteAll ,ticcleCreateImage}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

