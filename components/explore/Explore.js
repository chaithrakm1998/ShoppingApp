import React, { Component } from "react";
import { View, StyleSheet,Text, ScrollView,TouchableOpacity, Button } from "react-native";
import Category from "./Category";
import "../../assets/men.png";
import "../../assets/women.png";
import "../../assets/kids.png";
import "../../assets/homeappliances.png";
import "../../assets/watches.png";
import "../../assets/shoes.png";

export default function Explore({ navigation }) {

    const onviewmorePress =()=>{
        navigation.navigate("ProductPage")
    };
    
    
    return (
    <ScrollView scrollEventThrottle={16}>
      <View style={{ height: 400, marginTop: 20 }}>
        <View style={styles.button}>
            
        <Text onPress={onviewmorePress} style={styles.viewmore}>View More...</Text>
         
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Category
            imageUri={require("../../assets/men.png")}
            name="MEN'S CLOTHING"
          />
          <Category
            imageUri={require("../../assets/women.png")}
            name="WOMEN'S CLOTHING"
          />
          <Category
            imageUri={require("../../assets/kids.png")}
            name="KID'S CLOTHING"
          />
          <Category
            imageUri={require("../../assets/homeappliances.png")}
            name="HOME APPLIANCES"
          />
          <Category
            imageUri={require("../../assets/watches.png")}
            name="WATCHES"
          />
          <Category imageUri={require("../../assets/shoes.png")} name="SHOES" />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
  },
  button: {
    padding: 30,
    width: 200,
  },
});
