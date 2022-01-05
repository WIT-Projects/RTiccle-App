import { useContext } from 'react';
import AppContext from '../AppContext';

const UseUserLocation = () => {
    const { currentGroup, setCurrentGroup, initialCurrentGroup } = useContext(AppContext);

    return { currentGroup, setCurrentGroup, initialCurrentGroup };
}

export default UseUserLocation
