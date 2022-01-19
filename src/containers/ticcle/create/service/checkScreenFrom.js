const checkScreenFrom = (screenFrom, setIsUpdateMode, setTiccleGroup) => {
    switch(screenFrom) {
        case 'home':
            break;
        case 'ticcleDetail':
            setIsUpdateMode(true);
            break;
        default:
            setTiccleGroup(screenFrom);
            break;
    }
}

export {
    checkScreenFrom
}
