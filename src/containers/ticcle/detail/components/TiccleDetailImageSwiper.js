import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../../../../theme/colors';

const TiccleDetailImageSwiper = ({images, setImageExpansion, setImagePathForExpansion}) => {

    const imageGroup = images.map(
        (imagePath, index) => (
            <View style={styles.imageConatiner} key={index}
                    onTouchEnd={()=> {
                        setImagePathForExpansion(imagePath)
                        setImageExpansion(true)
                    }}>
                <Image source={{uri: imagePath}}
                style={styles.image}></Image>
            </View>
        )
    )

    return(
        <Swiper style={styles.swiper}
            loop={false}
            showsButtons={false}
            dotColor={colors.gray2}
            activeDotColor ={colors.sub}
            activeDotStyle ={{width : 60, height: 6}}
            dotStyle ={{width:10, height:6}}
        >
        {imageGroup}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    swiper:{
        height : 455,
    },
    imageConatiner:{
        width : '100%',
        aspectRatio : 1,
    },
    image:{
        width:'100%',
        height:'100%'
    }
})

export default TiccleDetailImageSwiper
