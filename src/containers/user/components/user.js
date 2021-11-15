import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../theme/colors';

function UserInfo() {
    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.font1}>사용자</Text>
                <Text style={styles.font2}>님</Text>
            </View>
            <View style={styles.rowContainer}>
                <Image style={styles.icon} source={require('../../../assets/images/Google_Logo.png')}></Image>
                <Text style={styles.font2}>email@gmail.com</Text>
                <View style={styles.right}>
                    <Text style={styles.font3}>계정연동</Text>
                    <Icon name="checkmark-circle-outline" size={20} color={colors.sub}></Icon>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    font1:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    font2:{
        fontSize: 15,
        marginLeft: 10,
    },
    font3:{
        fontSize: 15,
        marginRight: 5,
    },
    right:{
        flexDirection: 'row',
        position: 'absolute', 
        alignItems: 'center',
        right: 25,
    },
    icon:{
        width: 15, 
        height: 15,
    }
});

export default UserInfo;
