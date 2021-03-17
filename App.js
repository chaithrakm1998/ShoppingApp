import React from 'react'
import {StyleSheet,View,ScrollView} from 'react-native';
import HomeScreen from './components/Homescreen/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Contact from './components/HeaderContents/Contact'
import PrivacyPolicy from './components/HeaderContents/PrivacyPolicy'
import ProductPage from './components/ProductPage/ProductPage'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
const Stack = createStackNavigator();

export default function App(){

 

  return(
    <NavigationContainer>
    <Stack.Navigator>
     
        <>
        <Stack.Screen name="Welcome" component={HomeScreen} />
          <Stack.Screen name="Contact" component={Contact} />
         
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
          
        </>
    
    </Stack.Navigator>
  </NavigationContainer>

  
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})