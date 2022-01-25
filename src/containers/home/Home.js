import React, {useEffect} from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';
import MyMount from './components/MyMount';
import BookmarkGroupList from './components/BookmarkGroupList';
import NewTiccleGroupList from './components/NewTiccleGroupList';
import colors from '../../theme/colors';
import {getAllGroupIncludeImages} from '../../model/GroupModel';
import useGroupChanged from '../../context/hook/useGroupChanged';

const Home = ({navigation}) => {
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    useEffect(() => {
        (async () => {
            await getAllGroupIncludeImages(); // init group data
            setIsGroupChanged(!isGroupChanged);
        })();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <MyMount/>
            <BookmarkGroupList></BookmarkGroupList>

            {/* 나중에 지울거 */}
            <View style={{marginTop: 10}}>
                <Button title="로그인 화면 (임시)" onPress={() => navigation.navigate('LoginScreen')}></Button>
            </View>
            {/* 지울거 */}

            <NewTiccleGroupList></NewTiccleGroupList>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default Home;
