const checkGroupId = (groupId, setTiccleGroup) => {
    switch(groupId) {
        case '':
            break;
        default: //screenFrom = groupId
            setTiccleGroup(groupId);
            break;
    }
}

export {
    checkGroupId
}
