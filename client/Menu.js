import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, Text, TextInput, Button, View, YellowBox, SafeAreaView} from 'react-native'
import './global'


YellowBox.ignoreWarnings(['Warning: The provided value \'moz', 'Warning: The provided value \'ms-stream'])

export class Menu extends Component {
    
    render() {
        return (
    <View> 
    <Button style={{padding: 30}} title="View Health Records" 
        onPress={()=> this.props.setView()}/>
     <View style={styles.space} />
    <Button style={{padding: 30}} title="Update Health Records" 
        onPress={()=> this.props.setUpdate()}/>    
    <View style={styles.space} />
    <Button style={{padding: 30}} title="Buy Insurance Premium" 
        onPress={()=> this.props.setPay()}/>    
    </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
      marginVertical: 8, 
      fontSize: 20, 
      fontWeight: 'bold'
    },
    header: {
      marginVertical: 8, 
      fontSize: 30, 
      fontWeight: 'bold'
    },
    space: {
      width: 15, // or whatever size you need
      height: 15,
    },
  
  });

export default Menu
