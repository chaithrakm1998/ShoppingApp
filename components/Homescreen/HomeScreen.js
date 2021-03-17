import React from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,ImageBackground,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import '../../assets/logo1.png';
import '../../assets/bg.png';
import '../../assets/icon.png';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from '../explore/Explore'

export default function HomeScreen({navigation}) {

  

    const onHeader1Press =()=>{
        navigation.navigate("PrivacyPolicy")
    };
    const onHeader2Press =()=>{
        navigation.navigate("Contact")
    };
   

        return (
          <ImageBackground 
                    source={require('../../assets/bg.png')}
                     style={{width: 1600, height: 800}} 
                >
          
            <View style={styles.Screen}>
                
                <TouchableOpacity onPress={ () => navigation.navigate('HomeScreen')} >
                <Image 
                    style={styles.logo}
                    source={require('../../assets/logo1.png')}
                />
               </TouchableOpacity>
                <Text onPress={onHeader1Press} style={styles.header1}>Privacy Policy</Text>
                <Text onPress={onHeader2Press} style={styles.header2}>Contact</Text>
            
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height:60, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 30,
                            backgroundColor: 'white', 
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                           
                        }}>
                            <Icon name="ios-search" size={30} style={{ marginRight: 20 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Find Something"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700',fontSize:25, backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView><Explore/></ScrollView>
            </ImageBackground>
            
        );
    }
;

               

const styles = StyleSheet.create({
  Screen: {
      height:170,
      marginTop:20,
      flexDirection:'row',
      paddingTop:70,
      paddingLeft:250,
      backgroundColor:'#CA7D1',
      borderBottomColor:'#ccc',
      alignItems:"center"
  
  },
  logo: {
      height:80,
      width:80,
      
  },
  header1: {
      flexDirection:'row',
      padding:30,
      fontStyle:'italic',
      fontWeight:'bold',
      marginLeft:700,
      color:'black',
      fontSize:'20px',

      },
  header2: {
      flexDirection:'row',
      padding:30,
      fontStyle:'italic',
      fontWeight:'bold',
      color:'Black',
      fontSize:'20px',
      
  },
  homescreen: {
    backgroundColor:'orange'
  },
  input: {
    padding:50,
    
    flexDirection:'row',
    paddingRight:1,
   margin: 100,
      height: 10,
      borderColor: '#7a42f4',
    fontSize: 40,
    fontWeight:'normal',
    borderMargin:1
  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})