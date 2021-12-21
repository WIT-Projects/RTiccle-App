import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';

const TiccleDetailText = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae elit consequat, efficitur orci non, porta lectus. Maecenas justo risus, rutrum nec malesuada ut, ultrices a ligula. Nulla imperdiet diam et pellentesque lobortis. Fusce congue elit at nunc interdum, ac imperdiet lacus euismod. Sed fringilla tincidunt nisi, ac malesuada enim feugiat in. Aliquam congue felis a ex ultricies iaculis sit amet nec nisl. Sed lacinia ac nunc a placerat. Sed bibendum sodales odio. Etiam et fermentum velit. Curabitur molestie consectetur risus. Donec in consequat quam. Nunc ut pharetra lacus. In suscipit, magna eget vulputate finibus, enim nisi consectetur ligula, ut condimentum ex velit porta elit. In hac habitasse platea dictumst. Integer in aliquet nunc, a fermentum mauris.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1 ,
        borderBottomColor: colors.gray1,
        marginTop : 10,
    },
    text:{
        marginBottom : 48,
        color : colors.main,
        fontSize: 16,
        fontFamily : type.spoqaHanSansNeo_Regular,
        textAlign : 'left',
        lineHeight : 21
    }
})

export default TiccleDetailText
