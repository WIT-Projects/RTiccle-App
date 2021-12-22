import React from 'react';
import { useState } from 'react/cjs/react.development';
import AppContext from '../AppContext';
import uuid from 'react-native-uuid'

const AppProvider = ({children}) => {


    const [ticcleCreate, setTiccleCreate] = useState({
        id : '',
        title: '',
        link: '',
        tag : '',
        content : '',
        image: [],
        date: '',
        ticcleNumber: '',
        groupName: '',
    })

    const setTiccleTitle = (text) => {
        setTiccleCreate(state => {return {...state, title: text}})
    }
    const setTiccleLink = (text) => {
        setTiccleCreate(state => {return {...state, link: text}})
    }
    const setTiccleTag = (text) => {
        setTiccleCreate(state => {return {...state, tag: text}})
    }
    const setTiccleContent = (text) => {
        setTiccleCreate(state => {return { ...state, content: text}})
    }
    
    const setTiccleImage = (imagePath) => {
        const oldImage = ticcleCreate.image
        const newImage = {
            id : uuid.v4(),
            path : imagePath
        }
        setTiccleCreate(state => {return {...state, image: [...oldImage ,newImage]}})
    }

    const deleteTiccleCreate = () => {
        setTiccleCreate({
            title: '',
            link: '',
            tag : '',
            content : '',
            image: [],
        })
    }

    const deleteTiccleImage = (id) => {
        setTiccleCreate(ticcleCreate.image.filter(ticcleImage => ticcleImage.id !== id) ) 
    }

    const today = new Date()
    const year = today.getFullYear().toString().substr(-2);
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const formattedToday = `${year}년 ${month}일 ${date}일`
    const setTiccleDate = () => {
        setTiccleCreate(state => {return {...state, date : formattedToday}})
    }

    return(
        <AppContext.Provider value={{ticcleCreate, setTiccleCreate,
            setTiccleTitle, setTiccleLink, setTiccleTag, setTiccleContent, setTiccleImage, deleteTiccleCreate, deleteTiccleImage,
            setTiccleDate
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

