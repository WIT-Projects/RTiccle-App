import React from 'react';
import TiccleCreateProvider from '../../../context/provider/TiccleCreateProvider';
import TiccleCreateScreen from './TiccleCreateScreen';

const TiccleCreate = ({route}) => {
    
    return(
        <>
            <TiccleCreateProvider>
                <TiccleCreateScreen route={route}/>
            </TiccleCreateProvider>
        </>
    )
}


export default TiccleCreate
