import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import MyMount from './components/MyMount';
import BookMark from './components/BookMark';
import colors from '../../theme/colors';

const Home = () => {
    return (
      <ScrollView style={styles.container}>
        <MyMount mount={"태산"} imgUrl={'https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill'}></MyMount>
        <BookMark userName={"김민지"}></BookMark>
        <Text>Home입니다.</Text>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white
  },
})

export default Home;
