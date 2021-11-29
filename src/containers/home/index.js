import React from 'react';
import {ImageBackground, Text} from 'react-native';


const Home = () => {

  const imgSource = {uri :'../../assets/images/example_group.png' };

    return (
      <>
        <Text>Home입니다.</Text>
        <ImageBackground source={imgSource} resizeMode = 'cover' style={{flex:1}}></ImageBackground>
      </>
    );
}



export default Home;
