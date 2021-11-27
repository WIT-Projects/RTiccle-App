import React from 'react';
import { useState } from 'react/cjs/react.development';
import AppContext from '../AppContext';

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


    const setImage = () => {
        setTiccleCreateImage(state => {return [...ticcleCreateImage ,require('../../assets/images/example_group.png')]  }) 
    }
    const setImageDelete = () => {
        setTiccleCreateImage(image => {return []}) 
    }



    return(
        <AppContext.Provider value={{setTitle, setLink, setTag, setContent, setImage, setImageDelete, ticcleCreateImage}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

