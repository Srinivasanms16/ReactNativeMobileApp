import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Car from './Containers/CarItem/car';

import CarList from "./Containers/CarList/CarList";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Car name={"Model x"} tagline={"Starting at $45,000"} image={require("./assets/images/ModelX.jpeg")}></Car> */}
     <CarList></CarList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0'
  }
});

