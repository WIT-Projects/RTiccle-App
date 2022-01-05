import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';

const TypeBar = () => {
    const typeList = ["책", "블로그", "뉴스기사", "연재물", "SNS", "기타"];
    const [typeButtons, setTypeButton] = useState([
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
    ]);

    const onChange = id => {
        setTypeButton(
            typeButtons.map(item =>
                item.id === id ? { ...item, active: !item.active } : item
            )
        );
    };

    return (
        <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                {typeList.map((item, index) => { return (<Text key={index} style={typeButtons[index].active ? styles.pressedTypeText : styles.typeText} onTouchEnd={() => { onChange(index) }}>{item}</Text>) })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 22,
    },
    pressedTypeText: {
        fontFamily: type.notoSansKR_Regular,
        fontSize: 18,
        color: colors.sub,
        backgroundColor: colors.main,
        borderRadius: 28,
        height: 35,
        paddingHorizontal: 15,
        lineHeight: 43,
        marginLeft: 8,
    },
    typeText: {
        fontFamily: type.notoSansKR_Regular,
        fontSize: 18,
        color: colors.gray4,
        backgroundColor: colors.gray1,
        borderRadius: 28,
        paddingHorizontal: 10,
        height: 35,
        paddingHorizontal: 15,
        lineHeight: 43,
        marginLeft: 8,
    },
});

export default TypeBar;
