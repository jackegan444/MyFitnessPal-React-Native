import React, { useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, StatusBar, TextInput, Linking, Image } from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleMainPagePress = () => {
        navigation.navigate('MainPage')
    }

    const handleHomePagePress = () => {
        navigation.navigate('Fitness Home')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        const user = firestoreDocument.data()
                        navigation.navigate('Fitness Home')
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View>
            <View style={styles.containerLI}>

                <View style = {styles.bodyLI}>

                    <View style = {styles.headerLI}>
                        <TouchableHighlight style={styles.backButton}
                        onPress={() => handleMainPagePress()}
                        >
                        <Text style={styles.backButtonText}>
                                Back
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <TextInput style={styles.inputContainerLI}
                        placeholder="Email Address"
                        placeholderTextColor='grey'
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                     />

                    <TextInput secureTextEntry={true} style={styles.inputContainerLI}
                        placeholder="Password"
                        placeholderTextColor='grey'
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                     />

                    <TouchableHighlight
                    onPress={() => onLoginPress()}
                    >
                    <View style = {styles.loginButtonLI}>
                        <Text style = {styles.loginButtonTextLI}>
                            Log In
                        </Text>
                    </View>
                    </TouchableHighlight>

                    <Text style = {styles.forgotTextLI}  onPress={() => Linking.openURL('https://www.myfitnesspal.com/account/forgot-password')}>
                        Forgot password?
                    </Text>

                    <Text style = {styles.grayTextLI}>
                       ─────────  OR  ─────────
                    </Text>

                    <TouchableHighlight
                    onPress={() => handleHomePagePress()}
                    >
                    <View style = {styles.otherLoginButtonLI}>
                        <Text style = {styles.loginButtonTextLI}>
                            Continue with Apple
                        </Text>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    onPress={() => handleHomePagePress()}
                    >
                    <View style = {styles.otherLoginButtonLI}>
                        <Text style = {styles.loginButtonBlueTextLI}>
                            Continue with Facebook
                        </Text>
                    </View>
                    </TouchableHighlight>

                    <Text style = {styles.grayTextLI}>
                       We will never post anything without your permission.
                    </Text>
                    </View>
                </View>
             </View>
    )
}
