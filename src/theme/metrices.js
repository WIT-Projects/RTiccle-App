import { Dimensions } from "react-native";

/* 화면 크기 정의 */
const {width, height} = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}

export default metrics;
