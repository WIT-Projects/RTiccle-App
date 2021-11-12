import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
//import { Card, CardItem, Body, Left, Right, Thumbnail, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../theme/colors';

function Setting() {
    return (
        <View style={{ position: 'relative'}}>
            {
                category.map((post) => 
                    <SettingItem key={post.key} info={post} />
                )
            }
        </View>
    )
}

function SettingItem ( props ) {
    return (
        <View style={styles.container}>
            <Icon name={props.info.icon} size={20} style={{ paddingRight: 10 }} />
            <Text style={{ fontSize: 18 }}>{props.info.text}</Text>
            <Icon name="chevron-right" size={25} color={colors.gray3} style={{ position: 'absolute', right: 20 }}/>
        </View>
    )
}

const category = [
    {
        key: 0,
        icon: 'message-circle',
        text: '피드백 보내기',
    },
    {
        key: 1,
        icon: 'star',
        text: '앱 평점주기',
    },
    {
        key: 2,
        icon: 'log-out',
        text: '로그아웃',
    },
]

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default Setting;