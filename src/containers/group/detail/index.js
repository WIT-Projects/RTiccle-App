import React from 'react';
import {Text} from "react-native";

import GroupInfo from './components/groupInfo';

export default function GroupDetail(){
  return(
    <>
        <GroupInfo title={"현판"} imgUrl={'https://t1.daumcdn.net/thumb/R720x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/CyKAu5r6yUDSnRAy28UDlDEpCDs.png'} content={"데못죽 같은 거 모아두는"}/>
        <GroupInfo/>
    </>
  )
}
