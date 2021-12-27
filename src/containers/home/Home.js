import React from 'react';
import {Text, ScrollView, StyleSheet, Button} from 'react-native';
import MyMount from './components/MyMount';
import BookMarkList from './components/BookMarkList';
import NewTiccleGroupList from './components/NewTiccleGroupList';
import colors from '../../theme/colors';

const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <MyMount
                mount={'태산'}
                imgUrl={
                    'https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill'
                }></MyMount>
            <BookMarkList></BookMarkList>
            <Button
                title="그룹 생성"
                onPress={() => navigation.navigate('GroupCreateType')}></Button>
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
