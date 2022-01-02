import React,{useState, useEffect} from 'react';
import { Image,StyleSheet,TouchableOpacity,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../theme/colors';
import { type } from '../../theme/fonts';
import metrics from '../../theme/metrices';
import TiccleCreate from '../../containers/ticcle/create/TiccleCreate';
import UseTiccleCreate from '../../context/hook/UseTiccleCreate';
import { uploadNewTiccle } from '../../service/TiccleService';

const TiccleStack = createStackNavigator();

const TiccleStackNavigator = () => {

    const {ticcleCreate, setTiccleDate} = UseTiccleCreate();
    const [saveButtonDisable, setSaveButtonDisable] = useState(true);

    useEffect(() => {
        (ticcleCreate.title && ticcleCreate.content) ? setSaveButtonDisable(false) : setSaveButtonDisable(true);
    },[ticcleCreate.title, ticcleCreate.content])

    return(
    <TiccleStack.Navigator>
        <TiccleStack.Screen 
            name="TiccleCreate"
            component={TiccleCreate} 
            options={
                ({navigation}) =>  ({
                headerStyle :{
                backgroundColor: colors.main,
                height : metrics.topNavigationHeight,
            },
            title: '티클 작성',
            headerTintColor : colors.white ,
            headerTitleAlign : 'center',
            headerTitleStyle : {
                fontFamily: type.notoSansKR_Medium,
                fontSize : 20,
                lineHeight : 24,
            },
            headerLeft : () => (
                <TouchableOpacity style={styles.headerLeftTouchable} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/images/chevron_left.png')}
                        style={styles.headerLeftImage}
                    />
                </TouchableOpacity>
            ),
            headerRight : () => (
                <TouchableOpacity style={styles.headerRightTouchable}
                disabled={saveButtonDisable}
                onPress={ () => {
                    setTiccleDate()
                    uploadNewTiccle(ticcleCreate, ticcleCreate.images);
                    console.log(ticcleCreate)
                    navigation.navigate('TiccleDetail')
                }}>
                    <Text style={saveButtonDisable ? styles.headerRightTextDisable : styles.headerRightText}>저장</Text>
                </TouchableOpacity>
            )
            })}/>
    </TiccleStack.Navigator>
    )};

const styles = StyleSheet.create({
    headerLeftTouchable :{
        alignItems: 'center',
        justifyContent : 'center',
        width: 40,
        height : 40
    },
    headerLeftImage : {
        resizeMode : 'cover',
        width : 12, 
        height: 20, 
        tintColor : colors.white
    },
    headerRightTouchable : {
        alignItems: 'center',
        justifyContent : 'center',
        width : 60,
        height : 40,
        marginRight : 14,
    },
    headerRightText : {
        color : colors.white,
        fontFamily: type.notoSansKR_Medium,
        fontSize : 20,
        lineHeight : 24,
        marginBottom: 1,
    },
    headerRightTextDisable: {
        color : colors.gray5,
        fontFamily: type.notoSansKR_Medium,
        fontSize : 20,
        lineHeight : 24,
        marginBottom: 1,
    }
})

export default TiccleStackNavigator;
