import React, {useState} from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';
import { googleLoginAndLink } from '../../../../service/AuthService';
import {useErrorHandler} from 'react-error-boundary';
import Spinner from '../../../common/Spinner';

const GuestInfo = ({ setIsGuest }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleError = useErrorHandler(); // for error handling
    
    function linkWithGoogle() {
        setIsLoading(true);
        googleLoginAndLink().then(() => {
            setIsLoading(false);
            setIsGuest(false);
        }).catch(err => handleError(err));
    }

    return (
        <>
            {isLoading && <Spinner></Spinner>}
            <View style={styles.rowContainer}>
                <Text style={styles.font1}>Guest</Text>
                <Text style={styles.font2}>님</Text>
                <Text style={styles.font3} onPress={() => linkWithGoogle()}>계정연동</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rowContainer:{
        marginHorizontal: 24,
        height : 36,
        textAlignVertical : 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    font1:{
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18
    },
    font2:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 16,
        marginLeft : 6,
    },
    font3:{
        position: 'absolute',
        right : 0,
        fontFamily: type.spoqaHanSansNeo_Regular,
        color : colors.gray3,
        fontSize : 14,
        marginRight: 4,
    },
});

export default GuestInfo
