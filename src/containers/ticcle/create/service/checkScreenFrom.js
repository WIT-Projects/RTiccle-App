const checkScreenFrom = (screenFrom, setTiccleGroup) => {
    switch(screenFrom) {
        case 'home':
            break;
        default: //screenFrom = groupId
            setTiccleGroup(screenFrom);
            break;
    }
}

export {
    checkScreenFrom
}
