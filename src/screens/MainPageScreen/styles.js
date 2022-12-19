import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#0f77aa',
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
    
    titleViewM: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonViewM: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleM: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    signUpButtonM: {
        flexDirection: 'row',
        marginBottom: deviceHeight *.03,
        height: deviceHeight / 11,
        width: deviceWidth * 0.95,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpTextM: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0f77aa',
    },
    logInTextM: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
})