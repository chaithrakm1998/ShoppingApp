import React from 'react';
import { StyleSheet,Text} from 'react-native';
export default function Contact() {


  return(
     
      <Text styles={styles.footerLink}>contact number:</Text>
      
  );
}

const styles=StyleSheet.create({

footerLink: {
  color:"#788eec",
  fontWeight:"bold",
  fontSize: 70
}
})
