import React, {useState} from 'react';
import AppContext from '../AppContext';
import {FBDate} from '../../service/CommonService';

const AppProvider = ({children}) => {
    // Group
    const [groupCreate, setGroupCreate] = useState({
        title: '',
        description: '',
        bookmark: false,
        mainImage: '',
    });
    const initialGroupCreate = () => {
        setGroupCreate({
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
    // Group Update
    const [groupUpdate, setGroupUpdate] = useState([]);
    const initialGroupUpdate = () => {
        setGroupUpdate([]);
    };
    const setGroupUpdateTitle = text => {
        setGroupUpdate(state => {
            return {...state, title: text};
        });
    };
    const setGroupUpdateDescription = text => {
        setGroupUpdate(state => {
            return {...state, description: text};
        });
    };
    // 업데이트 시 서버에서 받아오는 기존 이미지 uri와 새로 바꾼 이미지의 source를 동시에 관리하기 위해, 다른 전역변수를 만들지 않고 imageUrl을 활용함. 첫 렌더링 시에는 서버에서 받아오는 이미지의 uri, 이미지를 바꿀 때는 새로운 이미지의 source가 imgPath로 들어옴. 업데이트 화면에서만 이렇게 사용.
    const setGroupUpdateImage = imgPath => {
        setGroupUpdate(state => {
            return {...state, imageUrl: imgPath};
        });
    };

    // Data Provider [notify]
    const [isGroupChanged, setIsGroupChanged] = useState(false);
    const [isTiccleListChanged, setIsTiccleListChanged] = useState(false);

    return (
        <AppContext.Provider
            value={{
                groupCreate,
                setGroupCreate,
                initialGroupCreate,
                setGroupDate,
                setGroupTitle,
                setGroupDescription,
                setGroupBookmark,
                setGroupImage,
                groupUpdate,
                setGroupUpdate,
                initialGroupUpdate,
                setGroupUpdateTitle,
                setGroupUpdateDescription,
                setGroupUpdateImage,
                isGroupChanged,
                setIsGroupChanged,
                isTiccleListChanged,
                setIsTiccleListChanged,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
