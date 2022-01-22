import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import TiccleUpdateHeader from "./components/header/TiccleUpdateHeader";

const TiccleUpdateScreen = ({route}) => {

    useEffect(()=> {
        console.log(route)
    },[])

    return(
        <>
            <TiccleUpdateHeader/>
            <ScrollView>
                <Text>
                    업데이트 스크린
                </Text>
            </ScrollView>
        </>

    )
}


export default TiccleUpdateScreen;
