import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';

const Setting = ({isGuest}) => {

    const item = [
        {
            icon: require('../../../assets/icon/sync.png'),
            text: '동기화',
        },
        {
            icon: require('../../../assets/icon/logout.png'),
            text: '로그아웃',
        },
    ]

    return (
        <View style={styles.container}>
            {
                item.map((post, index) => 
                    <SettingItem key={index} icon={post.icon} text={post.text} />
                )
            }
            {isGuest ?
            null : 
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => console.log('데이터 초기화')}>
                <Text style={styles.dataInitText}>데이터 초기화</Text>
            </TouchableOpacity>
            }
        </View>
    )
}

const SettingItem = ({icon, text}) => {
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={icon} style={styles.icon}/>
            <Text style={styles.itemText}>{text}</Text>
            <Image
                source={require('../../../assets/icon/chevron_right.png')}
                style={styles.iconChevron}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 7,
        paddingHorizontal: 24,
    },
    itemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
    },
    icon:{
        resizeMode:'contain',
        width:16,
        height:16,
    },
    iconChevron:{
        position: 'absolute',
        right: 0,
        tintColor: colors.gray3,
        resizeMode:'contain',
        width:20,
        height:20,  
    },
    itemText:{
        paddingLeft : 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color : colors.main
    },
    dataInitText:{
        fontFamily: type.notoSansKR_Bold,
        color : colors.sub,
        fontSize: 18,
        lineHeight: 26,
            
    }

})

export default Setting;
