import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';
import styles from './styles';

export default function RegistrationScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleMainPagePress = () => {
        navigation.navigate('MainPage')
    }
    const onSignUpPress = () =>
    {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
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
            <View style={styles.containerSU}>
                <View style = {styles.mainContainerSU}>
                  <View style = {styles.headerSU}>
                      <TouchableHighlight style={styles.backButton}
                      onPress={() => handleMainPagePress()}
                      >
                      <Text style={styles.backButtonText}>
                              Back
                          </Text>
                      </TouchableHighlight>
                      <Text style={styles.headerTextSU}>
                          Create Account
                      </Text>
                  </View>
                  <View style = {styles.bodySU}>
                      <View style = {styles.progressBarSU}>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.greenBarSU}>
                          </View>
                          <View style = {styles.grayBarSU}>
                          </View>
                      </View>

                      <Text style = {styles.sloganTextSU}>
                          Create your account to get started.
                      </Text>

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
                       </View>

                </View>
                     <TouchableHighlight
                         onPress= {() => onSignUpPress()}
                     >
                         <View style = {styles.nextButtonSU}>
                         <Text style = {styles.nextButtonTextSU}>
                             NEXT
                         </Text>
                     </View>
                     </TouchableHighlight>

            </View>
            </View>
    )
}
