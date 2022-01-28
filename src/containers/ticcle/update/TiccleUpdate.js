import React from "react";
import TiccleUpdateProvider from "../../../context/provider/TiccleUpdateProvider";
import TiccleUpdateScreen from "./TiccleUpdateScreen";

const TiccleUpdate = ({route}) => {
    return (
        <>
            <TiccleUpdateProvider>
                <TiccleUpdateScreen route={route}/>
            </TiccleUpdateProvider>
        </>
    )
}

export default TiccleUpdate
