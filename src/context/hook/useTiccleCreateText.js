import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreateText = () => {
    const {setTitle, setLink, setTag, setContent} = useContext(AppContext);

    return {setTitle, setLink, setTag, setContent};
}


export default useTiccleCreateText
