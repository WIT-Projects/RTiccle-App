import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import metrics from '../../../../../theme/metrices';
import { type } from '../../../../../theme/fonts';
import colors from '../../../../../theme/colors';

function TopBar(){
  return(
    <View style={styles.container}>
      <TouchableOpacity style= {styles.tocuhableOpacity}>
        <Image style={styles.image} source={require('../../../../../assets/images/chevron-left.png')}></Image>
      </TouchableOpacity>

      <Text style={styles.title}>설정</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
    justifyContent : 'center',
    width: '100%',
    height : metrics.topNavigationHeight,
    borderBottomColor : colors.gray1,
    borderBottomWidth : 1,
  },
  tocuhableOpacity:{
    position : 'absolute',
    top: 5,
    left : 5,
    width : 40,
    height : 40,
    alignItems : 'center',
    justifyContent : 'center',
  },
  image:{
    top: 3,
    resizeMode : 'contain',
    width : 22,
    height : 22
  },
  title :{
    fontFamily: type.notoSansKR_Bold,
    fontSize : 20,
  },
})

export default TopBar

