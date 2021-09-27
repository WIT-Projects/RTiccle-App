import Metrics from "./metrices";

/* 반응형 font size */
const size = {
    font6: Metrics.screenWidth * (6/365),
    font8: Metrics.screenWidth * (8/365),
    font10: Metrics.screenWidth * (10/365),   
};

/* 글꼴(추후 파일 저장) */
const type = {
    spoqaHanSansNeo: 'Spoqa-Han-Sans-Neo',
    notoSansKR: 'Noto-Sans-KR',
};

export default {
    size,
    type,
};
