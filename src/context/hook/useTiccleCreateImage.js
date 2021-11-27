import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreateImage = () => {
    const {setImage, setImageDelete, ticcleCreateImage} = useContext(AppContext);

    return {setImage, setImageDelete, ticcleCreateImage};
}


export default useTiccleCreateImage
