import React from 'react';
import TiccleDetailScreen from './TiccleDetailScreen';
import TiccleDetailProvider from '../../../context/provider/TiccleDetailProvider';


const TiccleDetail = ({route}) => {
   
    return (
        <>
            <TiccleDetailProvider>
                <TiccleDetailScreen route={route}/>
            </TiccleDetailProvider>
        </>

    )
}



export default TiccleDetail

