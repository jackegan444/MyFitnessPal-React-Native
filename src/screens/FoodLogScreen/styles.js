import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default StyleSheet.create({
    containerF: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1C1F28',
    },
    
    headerF: {
        backgroundColor: '#1C1F28',
        width: deviceWidth,
        alignItems: 'center',
        borderColor: '#383A44',
        borderBottomWidth: 2,
        marginBottom:10,
        flexDirection: 'row',
    },
    headerTextF: {
        marginTop: deviceHeight / 45,
        marginBottom: deviceHeight / 50,
        color: 'white',
        fontWeight: 'bold', 
        fontSize: deviceWidth / 20,
        marginLeft:20,
    },
    bodyF: {
        backgroundColor: '#161823',
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
    textF: {
        color: 'white',
        fontWeight: 'bold', 
        fontSize: deviceWidth / 10,
    },
    
    logFont: {
        color: 'white',
        fontSize: deviceWidth / 15,
        textAlign: 'center'
    },
    
    logFontBlack: {
        color: 'black',
        fontSize: deviceWidth / 15,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold'
    },
    
    logSubFont: {
        color: 'white',
        fontSize: deviceWidth / 25,
        textAlign: 'center'
    },
    
    logFontBold: {
        color: 'white',
        fontSize: deviceWidth / 16,
        fontWeight: 'bold',
    },
    
    addFoodFont: {
        color: 'blue',
        fontSize: deviceWidth / 18,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    
    logRow: {
        width: deviceWidth,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    logCol: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    mealCol: {
        width: deviceWidth * 0.95,
        height: deviceHeight / 9,
        marginTop: deviceHeight/80,
        marginBottom: deviceHeight/80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },
    
    innerMealRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: deviceWidth * 0.95,
        borderRadius: 10
    }
})