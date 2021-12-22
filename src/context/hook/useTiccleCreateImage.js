import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreateImage = () => {
    const {setImage, setImageDelete, setImageDeleteAll, ticcleCreateImage} = useContext(AppContext);

    return {setImage, setImageDelete, setImageDeleteAll, ticcleCreateImage};
}


export default useTiccleCreateImage
