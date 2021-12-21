import Metrics from "./metrices";

/* 반응형 font size */
const size = {
    font6: Metrics.screenWidth * (6/365),
    font8: Metrics.screenWidth * (8/365),
    font10: Metrics.screenWidth * (10/365),   
};

/* 글꼴(추후 파일 저장) */
const type = {
    spoqaHanSansNeo_Bold: 'SpoqaHanSansNeo-Bold',
    spoqaHanSansNeo_Light: 'SpoqaHanSansNeo-Light',
    spoqaHanSansNeo_Medium: 'SpoqaHanSansNeo-Medium',
    spoqaHanSansNeo_Regular: 'SpoqaHanSansNeo-Regular',
    spoqaHanSansNeo_Thin: 'SpoqaHanSansNeo-Thin',
    notoSansKR_Black: 'NotoSansKR-Black',
    notoSansKR_Bold: 'NotoSansKR-Bold',
    notoSansKR_Light: 'NotoSansKR-Light',
    notoSansKR_Medium: 'NotoSansKR-Medium',
    notoSansKR_Regular: 'NotoSansKR-Regular',
    notoSansKR_Thin: 'NotoSansKR-Thin',
};

export  {
    size,
    type,
};
