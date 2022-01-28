const checkGroupId = (groupId, setTiccleGroup, initialTiccle) => {
    initialTiccle();
    (groupId !== '') ? setTiccleGroup(groupId) : null;
}

export {
    checkGroupId
}
