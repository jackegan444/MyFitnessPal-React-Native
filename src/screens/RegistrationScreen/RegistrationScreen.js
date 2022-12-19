import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function RegistrationScreen({navigation}) {

    const handleMainPagePress = () => {
        navigation.navigate('MainPage')
    }

    return (
        <View>
            <View style={styles.containerSU}>
                <View style = {styles.headerSU}>
                    <TouchableHighlight style={styles.backButton}
                    onPress={() => handleMainPagePress()}
                    >
                    <Text style={styles.backButtonText}>
                            Back
                        </Text>
                    </TouchableHighlight>
                    
                    <Text style={styles.headerTextSU}>
                        Goals
                    </Text>
                </View>
                <View style = {styles.bodySU}>
                    <View style = {styles.progressBarSU}>
                        <View style = {styles.greenBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                        <View style = {styles.grayBarSU}>
                        </View>
                    </View>
                    <Text style = {styles.sloganTextSU}>
                        Let's start with goals.
                    </Text>
                    <Text style = {styles.headerText2SU}>
                        Select up to three that are most important to you.
                    </Text>

                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Lose Weight
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Maintain Weight
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Gain Weight
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Gain Muscle
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Modify My Diet
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Manage Stress
                        </Text>
                    </View>
                    <View style = {styles.selectionButtonSU}>
                        <Text style = {styles.selectionTextSU}>
                            Increase Step Count
                        </Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                            alert('Load Next Page')
                        }}
                    >
                        <View style = {styles.nextButtonSU}>
                        <Text style = {styles.nextButtonTextSU}>
                            NEXT
                        </Text>
                    </View>
                    </TouchableHighlight>
                </View>
            </View>
            </View>
    )
}