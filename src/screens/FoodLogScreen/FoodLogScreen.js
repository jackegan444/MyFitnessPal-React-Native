import React, { useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, StatusBar, TextInput, Linking, Image } from 'react-native';
import styles from './styles';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function FoodLogScreen({navigation}) {

    const [caloriesConsumed, setCaloriesConsumed] = useState(0)
    const [caloriesBurned, setCaloriesBurned] = useState(0)
    const [remainingCalories, setRemainingCalories] = useState(2000)

    const handleFitnessPagePress = () => {
        navigation.navigate('MainPage')
    }

    return (
        <View>
              <View style>
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
                          Food Log
                    </Text>
                </View>
                
                  <View style = {styles.bodyF}>
                  
                    <Text style = {styles.logFontBold}>
                        Calories Remaining
                    </Text>
                    <View style = {styles.logRow}>
                        <View style = {styles.logCol}>
                            <Text style = {styles.logFont}>
                                2000
                            </Text>
                            <Text style = {styles.logSubFont}>
                                Goal
                            </Text>
                        </View>
                        
                        <Text style = {styles.logFont}>
                            -
                        </Text>
                        
                        <View style = {styles.logCol}>
                            <Text style = {styles.logFont}>
                                0
                            </Text>
                            <Text style = {styles.logSubFont}>
                                Food
                            </Text>
                        </View>
                        
                        <Text style = {styles.logFont}>
                            +
                        </Text>
                        
                        <View style = {styles.logCol}>
                            <Text style = {styles.logFont}>
                                0
                            </Text>
                            <Text style = {styles.logSubFont}>
                                Exercise
                            </Text>
                        </View>
                        
                        <Text style = {styles.logFont}>
                            =
                        </Text>
                        
                        <View style = {styles.logCol}>
                            <Text style = {styles.logFont}>
                                0
                            </Text>
                            <Text style = {styles.logSubFont}>
                                Remaining
                            </Text>
                        </View>
                        
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Breakfast
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                0
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.addFoodFont}>
                                ADD FOOD
                            </Text>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/af4dcc14f358dbb2f23f54c83ec935ab' }}
                                style={{ height: deviceHeight/20, width: deviceWidth/13, marginRight: 5  }}
                            />
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Lunch
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                0
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.addFoodFont}>
                                ADD FOOD
                            </Text>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/af4dcc14f358dbb2f23f54c83ec935ab' }}
                                style={{ height: deviceHeight/20, width: deviceWidth/13, marginRight: 5  }}
                            />
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Dinner
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                0
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.addFoodFont}>
                                ADD FOOD
                            </Text>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/af4dcc14f358dbb2f23f54c83ec935ab' }}
                                style={{ height: deviceHeight/20, width: deviceWidth/13, marginRight: 5  }}
                            />
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Snacks
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                0
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.addFoodFont}>
                                ADD FOOD
                            </Text>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/af4dcc14f358dbb2f23f54c83ec935ab' }}
                                style={{ height: deviceHeight/20, width: deviceWidth/13, marginRight: 5  }}
                            />
                        </View>
                    </View>
                      
                  </View>
                </View>
             </View>
             </View>
    )
}