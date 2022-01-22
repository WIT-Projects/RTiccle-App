const checkGroupId = (groupId, setTiccleGroup, initialTiccle) => {
    switch(groupId) {
        case '':
            initialTiccle();
            break;
        default: //screenFrom = groupId
            setTiccleGroup(groupId);
            break;
    }
}

export {
    checkGroupId
}
