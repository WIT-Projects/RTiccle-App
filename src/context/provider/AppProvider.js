import React, {useState} from 'react';
import AppContext from '../AppContext';
import {FBDate} from '../../service/CommonService';

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
        console.log(ticcle);
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
                tagList: tagList.filter(tagList => tagList !== tag),
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
    // Group Update
    const [groupUpdate, setGroupUpdate] = useState([]);
    const initialGroupUpdate = () => {
        setGroupUpdate([]);
    };
    const setGroupUpdateType = num => {
        setGroupUpdate(state => {
            return {...state, type: num};
        });
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

    // Data Provider
    const [groupList, setGroupList] = useState([]);
    const setGroupListAtOne = (targetGId, groupData) => {
        const list = groupList;
        const idx = list.findIndex((obj => obj.id == targetGId));
        list[idx] = groupData;
        setGroupList(list);
    }
    const deleteOneGroupOfList = targetGId => {
        const list = groupList;
        const idx = list.findIndex((obj => obj.id == targetGId));
        list.splice(idx, 1);
        setGroupList(list);
    }
    const [ticcleList, setTiccleList] = useState([]);
    const setTiccleListAtOne = (targetTId, ticcleData) => {
        const list = ticcleList;
        const idx = list.findIndex((obj => obj.id == targetTId));
        list[idx] = ticcleData;
        setTiccleList(list);
    }
    const deleteOneTiccleOfList = targetTId => {
        const list = ticcleList;
        const idx = list.findIndex((obj => obj.id == targetTId));
        list.splice(idx, 1);
        setTiccleList(list);
    }

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
                groupUpdate,
                setGroupUpdate,
                initialGroupUpdate,
                setGroupUpdateType,
                setGroupUpdateTitle,
                setGroupUpdateDescription,
                setGroupUpdateImage,
                
                groupList,
                setGroupList,
                setGroupListAtOne,
                deleteOneGroupOfList,
                ticcleList,
                setTiccleList,
                setTiccleListAtOne,
                deleteOneTiccleOfList,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
