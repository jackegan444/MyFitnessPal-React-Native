import React, { useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, StatusBar, TextInput, Linking, Image } from 'react-native';
import styles from './styles';

export default function HomeScreen({navigation}) {

    const handleFoodLogScreenPress = () => {
        navigation.navigate('Food Log')
    }

    const handleFitnessPagePress = () => {
        navigation.navigate('MainPage')
    }

    return (
        <View>
                <View style={styles.containerF}>
                <View style = {styles.headerF}>
                    <TouchableHighlight style={styles.backButton}
                    onPress={() => handleFitnessPagePress()}
                    >
                    <Text style={styles.backButtonText}>
                            Back
                        </Text>
                    </TouchableHighlight>
                    
                    <Text style={styles.headerTextF}>
                          Fitness Homepage
                    </Text>
                </View>
                
                  <View style = {styles.bodyF}>
                    <TouchableHighlight 
                        onPress={() => handleFoodLogScreenPress()}
                    >
                      <View style={styles.homepageButtonF}>
                          <Text style={styles.homepageButtonTextF}>
                            Food Log
                          </Text>
                      </View>
                    </TouchableHighlight>
                      
                       <View style={styles.homepageButtonF}>
                          <Text style={styles.homepageButtonTextF}>
                            Option 2
                          </Text>
                      </View>
                      
                       <View style={styles.homepageButtonF}>
                          <Text style={styles.homepageButtonTextF}>
                            Option 3
                          </Text>
                      </View>
                      
                       <View style={styles.homepageButtonF}>
                          <Text style={styles.homepageButtonTextF}>
                            Option 4
                          </Text>
                      </View>
                  </View>
                </View>
             </View>
    )
}