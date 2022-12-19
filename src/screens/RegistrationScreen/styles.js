import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerSU: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
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
    headerSU: {
        backgroundColor: '#1C1F28',
        width: deviceWidth,
        alignItems: 'center',
        borderBottomStyle: 'solid',
        borderBottomColor: '#383A44',
        borderBottomWidth: 2,
        flexDirection: 'row',
    },
    headerTextSU: {
        marginTop: deviceHeight / 45,
        marginBottom: deviceHeight / 50,
        color: 'white',
        fontWeight: 'bold', 
        fontSize: deviceWidth / 20,
        marginLeft:50,
    },
    
    sloganTextSU: {
        marginTop: deviceHeight / 45,
        marginBottom: deviceHeight / 50,
        color: 'white',
        fontWeight: 'bold', 
        fontSize: deviceWidth / 20,
    },
    
    progressBarSU: {
        flexDirection: 'row',
        marginTop: deviceHeight / 50,
    },
    greenBarSU: {
      backgroundColor: '#65C387',
      height: deviceHeight / 150,
      width: deviceWidth / 10,
      marginRight: deviceWidth / 100,
    },
    grayBarSU: {
      backgroundColor: '#3B3D45',
      height: deviceHeight / 150,
      width: deviceWidth / 10,
      marginRight: deviceWidth / 100,
    },
    bodySU: {
        backgroundColor: '#161823',
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
    headerText2SU: {
        color: '#696B6D',
        fontSize: deviceWidth / 25,
    },
    selectionButtonSU: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: deviceHeight / 50,
        width: deviceWidth / 1.1,
        height: deviceHeight / 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectionTextSU: {
        color: 'white',
        fontSize: deviceWidth / 25,
    },
    nextButtonSU: {
        backgroundColor: '#6298F7',
        borderRadius: 5,
        width: deviceWidth / 1.1,
        height: deviceHeight / 15,
        marginTop: deviceHeight / 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonTextSU: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: deviceWidth / 25,
    },
})