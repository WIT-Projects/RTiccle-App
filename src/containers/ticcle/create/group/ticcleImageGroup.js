import React from 'react';
import { View, StyleSheet } from 'react-native';
import TiccleImage from '../components/ticcleImage';

const TiccleImageGroup = ({onPress, imageSource}) => {
    return(
        <View style={styles.container}>
            <TiccleImage onPress={onPress} imageSource={imageSource}/>
            <TiccleImage onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
