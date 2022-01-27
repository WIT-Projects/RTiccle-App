const checkGroupId = (groupId, setTiccleGroup, initialTiccle) => {
    (groupId === '') ? initialTiccle() : setTiccleGroup(groupId);
}

export {
    checkGroupId
}
