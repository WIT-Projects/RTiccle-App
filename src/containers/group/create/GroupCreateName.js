import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
} from 'react-native';

import TextInfo from '../../common/TextInfo';
import GroupTextInput from './components/GroupTextInput';

import colors from '../../../theme/colors';

function GroupCreateName({navigation}) {
    const [groupCreateButtonDisable, setGroupCreateButtonDisable] =
        useState(true);

    return (
        <View style={styles.container}>
            <ScrollView>
                <TextInfo
                    title="그룹의 이름은 무엇인가요?"
                    subtitle="나만의 그룹 이름을 입력해보세요!"></TextInfo>
                <GroupTextInput
                    setButtonDisable={
                        setGroupCreateButtonDisable
                    }></GroupTextInput>
                {/* <SaveButton
                    text="다음으로"
                    buttonDisabled={groupCreateButtonDisable}
                    navigation={navigation}></SaveButton> */}
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('GroupCreateImage');
                        }}>
                        <Text>저장하기</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
});

export default GroupCreateName;
