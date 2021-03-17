import React from 'react';
import { StyleSheet,Text} from 'react-native';
export default function ProductPage() {


  return(
     
      <Text styles={styles.footerLink}>productPage</Text>
      
  );
}

const styles=StyleSheet.create({

footerLink: {
  color:"#788eec",
  fontWeight:"bold",
  fontSize: 70
}
})
