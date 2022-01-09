import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import TextInfo from '../../common/TextInfo';
import GroupTextInput from './components/GroupTextInput';
import GroupCreateConfirmButton from './components/GroupCreateConfirmButton';

import colors from '../../../theme/colors';

const GroupCreateName = ({navigation}) => {
    const [groupCreateButtonDisable, setGroupCreateButtonDisable] =
        useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.textContainer}>
                        <TextInfo
                            title="그룹의 이름은 무엇인가요?"
                            subtitle="나만의 그룹 이름을 입력해보세요!"></TextInfo>
                        <GroupTextInput
                            setButtonDisable={
                                setGroupCreateButtonDisable
                            }></GroupTextInput>
                    </View>
                    <GroupCreateConfirmButton
                        text="확인"
                        buttonDisabled={groupCreateButtonDisable}
                        navigation={navigation}></GroupCreateConfirmButton>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.white,
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
