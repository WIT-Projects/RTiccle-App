import React,{useState} from 'react';
import {Image, TouchableOpacity, StyleSheet} from "react-native";

import GroupInfo from './components/groupInfo';
import Search from './components/search';
import Bottom from './components/bottom';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';

const GroupDetail = () => {
  const [existTiccle, setExistTiccle] = useState(true);

  return(
    <>
      <GroupInfo title={"현판"} imgUrl={'https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/CyKAu5r6yUDSnRAy28UDlDEpCDs.png'} content={"데못죽 같은 거 모아두는"}/>
      <Search></Search>
      {existTiccle? <GroupDetailTiccleList/>: <ZeroTiccle/>}
      {/* Floating Button */}
      <TouchableOpacity activeOpacity={0.5} style={styles.touchableOpacityStyle} >
        <Image source={require('../../../assets/icon/make.png')}  style={styles.floatingButtonStyle} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  // Floating button css
  touchableOpacityStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
})

export default GroupDetail;