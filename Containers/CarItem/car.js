import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import styles from './style';
import StyleButton from '../button/button';

const buttons = [
  { id:'1',
  title:'custom order',
  type:'primary',
  fun:()=>{alert('one')}
  },
  {
    id:'2',
    title:'existing inventory',
    type:'secondary',
    fun:()=>{alert('two')}
  }]

const cars = (props)=>{

  const {name, tagLine, image} = props.info;
    return(
        <View style={styles.container}>
          <ImageBackground style={styles.background} source={image} />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtile}>{tagLine}</Text>
          <View style={styles.buttonView}>
          {buttons.map(x=><StyleButton key={x.id} 
          title={x.title} 
          type={x.type}
          fun = {x.fun}></StyleButton>)}
          </View>
        </View>
    );
}

export default cars;