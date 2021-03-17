import React from 'react'
import {StyleSheet,View,ScrollView} from 'react-native';
import HomeScreen from './components/Homescreen/HomeScreen'

export default function App(){
  return(
   

  
    <ScrollView style={styles.container}>
      <HomeScreen/> 
      
      </ScrollView>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})