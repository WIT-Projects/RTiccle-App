import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreateImage = () => {
    const {setImage, setImageNone, ticcleCreateImage} = useContext(AppContext);

    return {setImage, setImageNone, ticcleCreateImage};
}


export default useTiccleCreateImage
