import React from 'react';
import {View, FlatList} from 'react-native';
import cars from './carsdata';
import Car from '../CarItem/car';
import styles from "./styles";

const CarList = (props)=>{

return(<View style={styles.container}>
        <FlatList
        data={cars}
        renderItem={({item})=> <Car info={item} ></Car>}
        keyExtractor={(item) => item.id}
        horizontal={true}
        >
        </FlatList>
      </View>);
}

export default CarList;