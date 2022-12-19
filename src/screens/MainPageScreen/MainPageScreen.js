import React, { useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, StatusBar, TextInput, Linking, Image } from 'react-native';
import styles from './styles';

export default function MainPageScreen({navigation}) {

    const handleSignUpPagePress = () => {
        navigation.navigate('Registration')
    }

    const handleLogInPagePress = () => {
        navigation.navigate('Login')
    }

    return (
        
        <View style={styles.containerMain}>
            <View style={styles.titleViewM}>
                <Text style={styles.titleM}>
                    myfitnesspal
                </Text>
            </View>
                
            <View style={styles.buttonViewM}>
                <TouchableHighlight 
                onPress={() => handleSignUpPagePress()}
                >
                    <View style={styles.signUpButtonM}>
                        <Text style={styles.signUpTextM}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={() => handleLogInPagePress()}
                >
                    <Text style={styles.logInTextM}>
                        Log In
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}