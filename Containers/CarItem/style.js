import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    background:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        resizeMode:'cover',
        position:'absolute'
    },
    title:{
        marginTop:'40%',
        marginLeft:'30%',
        fontSize:40,
        fontWeight:'bold',
        alignItems:'center'
    },
    subtile:{
        fontSize:20,
        marginLeft:'30%',
        color:'rgb(229, 230, 227)'
    },
    container:{
        width:Dimensions.get('window').width,
      height:Dimensions.get('window').height
    },
    buttonView:{
        bottom:50,
        position:'absolute',
        width:'100%'
    }
});

export default styles;