import React from "react";
import TiccleUpdateProvider from "../../../context/provider/TiccleUpdateProvider";
import TiccleUpdateScreen from "./TiccleUpdateScreen";

const TiccleUpdate = ({route, navigation}) => {
    return (
        <>
            <TiccleUpdateProvider>
                <TiccleUpdateScreen route={route} navigation={navigation}/>
            </TiccleUpdateProvider>
        </>
    )
}

export default TiccleUpdate
