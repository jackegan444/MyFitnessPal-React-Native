import { Dimensions, StyleSheet } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerLI: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1C1F28',
    },
    
    headerLI: {
        backgroundColor: '#1C1F28',
        width: deviceWidth,
        alignItems: 'center',
        borderColor: '#383A44',
        borderBottomWidth: 2,
        marginBottom:10,
        flexDirection: 'row',
    },
    headerTextLI: {
        marginTop: deviceHeight / 45,
        marginBottom: deviceHeight / 50,
        color: 'white',
        fontWeight: 'bold', 
        fontSize: deviceWidth / 20,
        marginLeft:50,
    },

    backButton:
    {
        height: deviceHeight/19,
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

    bodyLI: {
        backgroundColor: '#161823',
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
    
    inputContainerLI:{
        fontSize: deviceHeight/35,
        color:'gray',
        borderColor: '#262938',
        borderWidth:2,
        borderRadius:2,
        height:deviceHeight/15,
        width:deviceHeight/1.95,
        backgroundColor:'#161823',
        margin: 5,
    },
    
    forgotTextLI: {
        color: '#6298F7',
        textAlign:'center',
         fontSize: deviceWidth / 23,
        
    },
    
    grayTextLI: {
        color:'gray',
        textAlign:'center',
        fontSize: deviceWidth / 22,
        margin:15,
    },

    
    loginButtonLI: {
        backgroundColor: '#6298F7',
        borderRadius: 5,
        width: deviceWidth / 1.1,
        height: deviceHeight / 15,
        margin: deviceHeight / 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    loginButtonTextLI: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: deviceWidth / 20,
    },
        
    otherLoginButtonLI:{
        backgroundColor: 'white',
        borderRadius: 2,
        width: deviceWidth / 1.5,
        height: deviceHeight / 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    
    loginButtonBlueTextLI: {
        color: '#4267B2',
        fontWeight: 'bold',
        fontSize: deviceWidth / 20,
    },
})