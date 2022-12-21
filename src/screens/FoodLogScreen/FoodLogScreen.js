import React, { useState } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, StatusBar, TextInput, Linking, Image } from 'react-native';
import styles from './styles';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function FoodLogScreen({navigation}) {

    const [caloriesConsumed, setCaloriesConsumed] = useState(0)
    const [remainingCalories, setRemainingCalories] = useState(2000)
    const [breakfastItem, setBreakfastItem] = useState(0)
    const [breakfastCalories, setBreakfastCalories] = useState(0)
    const [lunchItem, setLunchItem] = useState(0)
    const [lunchCalories, setLunchCalories] = useState(0)
    const [dinnerItem, setDinnerItem] = useState(0)
    const [dinnerCalories, setDinnerCalories] = useState(0)
    const [snackItem, setSnackItem] = useState(0)
    const [snackCalories, setSnackCalories] = useState(0)

    const handleFitnessPagePress = () => {
        navigation.navigate('MainPage')
    }

    const updateBreakfast = () => {
        setBreakfastCalories(breakfastCalories + parseInt(breakfastItem))
        updateTotals(breakfastItem)
    }

    const updateLunch = () => {
        setLunchCalories(lunchCalories + parseInt(lunchItem))
        updateTotals(lunchItem)
    }

    const updateDinner = () => {
        setDinnerCalories(dinnerCalories + parseInt(dinnerItem))
        updateTotals(dinnerItem)
    }

    const updateSnack = () => {
        setSnackCalories(snackCalories + parseInt(snackItem))
        updateTotals(snackItem)
    }

    const updateTotals = (newItem) => {
        setCaloriesConsumed(caloriesConsumed + parseInt(newItem))
        setRemainingCalories(remainingCalories - newItem)
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
                                {caloriesConsumed}
                            </Text>
                            <Text style = {styles.logSubFont}>
                                Food
                            </Text>
                        </View>
                        
                        <Text style = {styles.logFont}>
                            =
                        </Text>
                        
                        <View style = {styles.logCol}>
                            <Text style = {styles.logFont}>
                                {remainingCalories}
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
                                {breakfastCalories}
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <TextInput style = {styles.calInput}
                                placeholder="0"
                                keyboardType = 'numeric'
                                placeholderTextColor='black'
                                onChangeText={(item) => {
                                    setBreakfastItem(item)}
                                }
                                value={breakfastItem}
                            />
                            <TouchableHighlight
                                onPress={() => updateBreakfast()}
                            >
                                <Text style = {styles.addFoodFont}>
                                    ADD FOOD
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Lunch
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                {lunchCalories}
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                            <TextInput style = {styles.calInput}
                                    placeholder="0"
                                    keyboardType = 'numeric'
                                    placeholderTextColor='black'
                                    onChangeText={(item) => setLunchItem(item)}
                                    value={lunchItem}
                                />
                                <TouchableHighlight
                                    onPress={() => updateLunch()}
                                >
                                    <Text style = {styles.addFoodFont}>
                                        ADD FOOD
                                    </Text>
                                </TouchableHighlight>
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Dinner
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                {dinnerCalories}
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                        <TextInput style = {styles.calInput}
                                    placeholder="0"
                                    keyboardType = 'numeric'
                                    placeholderTextColor='black'
                                    onChangeText={(item) => setDinnerItem(item)}
                                    value={dinnerItem}
                                />
                                <TouchableHighlight
                                    onPress={() => updateDinner()}
                                >
                                    <Text style = {styles.addFoodFont}>
                                        ADD FOOD
                                    </Text>
                                </TouchableHighlight>
                        </View>
                    </View>
                    
                    <View style = {styles.mealCol}>
                        <View style = {styles.innerMealRow}>
                            <Text style = {styles.logFontBlack}>
                                Snacks
                            </Text>
                            <Text style = {styles.logFontBlack}>
                                {snackCalories}
                            </Text>
                        </View>
                        <View style = {styles.innerMealRow}>
                        <TextInput style = {styles.calInput}
                                    placeholder="0"
                                    keyboardType = 'numeric'
                                    placeholderTextColor='black'
                                    onChangeText={(item) => setSnackItem(item)}
                                    value={snackItem}
                                />
                                <TouchableHighlight
                                    onPress={() => updateSnack()}
                                >
                                    <Text style = {styles.addFoodFont}>
                                        ADD FOOD
                                    </Text>
                                </TouchableHighlight>
                        </View>
                    </View>
                      
                  </View>
                </View>
             </View>
             </View>
    )
}