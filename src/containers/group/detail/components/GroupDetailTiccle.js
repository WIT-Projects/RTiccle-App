import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from '../../../../theme/colors'

const  GroupDetailTiccle = ({index, title, hashTag}) => {
  return(
    <>
        <View style={styles.container}>
            <Text style={styles.font1}>{index}</Text>
            <View style={styles.container2}>
                <Text style={styles.font2}>{title}</Text>
                <View style={styles.container3}>
                    {hashTag.map((item, index) => {return (<Text style={styles.font3} key={index}>#{item} </Text>)})}
                </View>
            </View>
            
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 140,
        backgroundColor: colors.main,
        borderBottomWidth:1,
        borderColor: colors.white,
    },
    container2:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3:{
        flexDirection: 'row',
    },
    font1:{
        fontSize: 12,
        color: colors.white,
        marginLeft:18,
        marginTop:13,
        marginBottom:21,
    },
    font2:{
        fontSize: 16,
        color: colors.white,
        marginBottom: 6,
    },
    font3:{
        fontSize: 12,
        color: colors.sub,
    },
})

export default GroupDetailTiccle;
