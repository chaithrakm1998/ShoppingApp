import React from 'react'
import {StyleSheet,Text,View,ScrollView} from 'react-native';

import Header from './components/contentheader/Header'
import Contact from './components/contentheader/contact'
import PrivacyPolicy from './components/contentheader/PrivacyPolicy'

export default function App(){
  return(
    <ScrollView style={styles.container}>
      <Header/>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})