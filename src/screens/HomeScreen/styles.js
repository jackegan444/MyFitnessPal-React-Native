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
    backButton:
    {
        height: deviceHeight/23,
        width: deviceWidth/5,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius:20,
        borderColor: '#6298F7',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkBlue',
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
    
    homepageButtonF: {
        backgroundColor: '#6298F7',
        borderRadius: 5,
        width: deviceWidth / 1.1,
        height: deviceHeight / 7,
        margin: deviceHeight / 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    homepageButtonTextF: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: deviceWidth / 20,
    },
})