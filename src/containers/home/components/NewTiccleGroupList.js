import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { type } from '../../../theme/fonts';
import TiccleGroup from './TiccleGroup';
import {getNewTiccleGroupList} from '../container/HomeContainer';

const NewTiccleGroupList = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = getNewTiccleGroupList(10);
        getData.then((value) => setData(value));
    }, []);

    return (
        <>
            <Text style={styles.blackBoldFont}>신규 티끌이 생성된 그룹</Text>
            {data.length != 0 ? 
                <View style={styles.container} >
                    {data.map((item) => {return (<TiccleGroup key={item.id} imgUrl={item.imgUrl} groupTitle={item.title} ticcleTitle={'ticcleTitle'}></TiccleGroup>)})}
                </View> 
                : <Text>작성된 티끌이 존재하지 않습니다.</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    blackBoldFont:{
        fontFamily : type.spoqaHanSansNeo_Bold,
        fontSize : 18,
        marginTop: 36,
        marginHorizontal: 18,
        marginBottom: 18,
    },
})

export default NewTiccleGroupList;
