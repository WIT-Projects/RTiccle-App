import React from 'react';
import {StyleSheet, Text, ImageBackground, View, Image} from "react-native";
import colors from '../../../../theme/colors'
const  GroupInfo = ({title, imgUrl, content}) => {
  return(
    <>
    <ImageBackground source={{uri:imgUrl}}
        resizeMode="cover"
        style={{ width: "100%", height: 256 }}>
        <View style={styles.comtainer}>
            <View style={styles.comtainer2}>
                <View style={styles.container3}>
                    <Text style={styles.title}>{title}</Text>
                    <Image style={styles.pencil} source={require('../../../../assets/icon/pencil.png')}></Image>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.content}>{content}</Text>
                    <Image style={styles.star} source={require('../../../../assets/icon/star.png')}></Image>
                </View>
                
            </View>
        </View>
    </ImageBackground>
    
    
    
    </>
  )
}

const styles = StyleSheet.create({
    comtainer:{
        flex: 1,
        flexDirection:'row',
        alignItems:'flex-end',
    },
    container2:{
        flexDirection: 'column',
    },
    container3:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    container4:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingRight:120,
    },
    pencil:{
        marginTop:10,
    },
    star:{
        marginBottom:12,
    },
    title:{
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop:8,
        marginRight: 8, 
    },
    content:{
        fontSize: 16,
        color: colors.white,
        marginLeft: 18,
        marginBottom: 18,
    }
})

export default GroupInfo;
