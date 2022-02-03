import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Platform, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import TextInfo from '../../common/TextInfo';
import GroupTextInput from './components/GroupTextInput';
import GroupCreateConfirmButton from './components/GroupCreateConfirmButton';
import {BackHandler} from 'react-native';
import useGroupCreate from '../../../context/hook/useGroupCreate';
import colors from '../../../theme/colors';

const GroupCreateName = ({navigation}) => {
    const [buttonDisabled, setButtonDisable] = useState(true);
    const [isExistGroup, setIsExistGroup] = useState(false);
    const {initialGroupCreate} = useGroupCreate();

    useEffect(() => {
        //backButton
        const initialGroupData = () => {
            initialGroupCreate();
            navigation.goBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', initialGroupData);
        return () => backHandler.remove();
    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
            <View style={styles.headerShadow}></View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.inner}>
                    <View style={styles.textContainer}>
                        <TextInfo title="그룹의 이름은 무엇인가요?" subtitle="나만의 그룹 이름을 입력해보세요!"></TextInfo>
                        <GroupTextInput setButtonDisable={setButtonDisable} isExistGroup={isExistGroup} setIsExistGroup={setIsExistGroup}></GroupTextInput>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
            <GroupCreateConfirmButton
                text="확인"
                setButtonDisable={setButtonDisable}
                buttonDisabled={buttonDisabled}
                setIsExistGroup={setIsExistGroup}
                navigation={navigation}></GroupCreateConfirmButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.white,
    },
    headerShadow: {
        height: 1,
        backgroundColor: '#F1F1F1',
        shadowColor: colors.gray4,
        shadowOpacity: 1,
        elevation: 4,
    },
    inner: {
        width: '100%',
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
});

export default GroupCreateName;
