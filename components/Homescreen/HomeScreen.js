import React from 'react';
import {StyleSheet,Text,View,Image,ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import '../../assets/logo1.png';
import '../../assets/bg.png';

export default function HomeScreen({navigation}) {

  const [text, onChangeText] = React.useState("Find Something...!!");

    const onHeader1Press =()=>{
        navigation.navigate("contact")
    };
    const onHeader2Press =()=>{
        navigation.navigate("Privacy Policy")
    };
   

        return (
          <ImageBackground 
                    source={require('../../assets/bg.png')}
                     style={{width: 1600, height: 800}} 
                >
          
            <View style={styles.Screen}>
                
                <TouchableOpacity onPress={ () => navigation.push('HomeScreen')} >
                <Image 
                    style={styles.logo}
                    source={require('../../assets/logo1.png')}
                />
               </TouchableOpacity>
                <Text onPress={onHeader1Press} style={styles.header1}>Privacy Policy</Text>
                <Text onPress={onHeader2Press} style={styles.header2}>Contact</Text>
            
            </View>
            <View style={styles.find}>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
       
      >
        
      </TextInput>
     
            </View>
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