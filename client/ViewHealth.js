import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { ScrollView, Image, StyleSheet, Text, TextInput, Button, View, YellowBox, SafeAreaView} from 'react-native'
import './global'


YellowBox.ignoreWarnings(['Warning: The provided value \'moz', 'Warning: The provided value \'ms-stream'])

export class ViewHealth extends Component {

  componentDidMount(){
    this.props.read2();
    this.props.read3();
    this.props.read1();
    this.props.read();
    this.props.read4();
    this.props.read5();
    this.props.read6();

}
    render() {
        return (
        <View style={styles.container}>
          <View style={styles.space} />
           <Text style={styles.header}>Health Records</Text>
           <Text style={styles.title}>Phone Number : {this.props.phoneNumber}</Text> 
           <Text style={styles.title}>Age : {this.props.contract4}</Text> 
           <Text style={styles.title}>Height (cms) : {this.props.contract5}</Text> 
           <Text style={styles.title}>Weight (kgs) : {this.props.contract6}</Text> 
           <Text style={styles.title}>Medications : {this.props.contract2}</Text> 
           <Text style={styles.title}>Allergies : {this.props.contract3}</Text> 
           <Text style={styles.title}>Diseases : {this.props.contract1}</Text> 
           <Text style={styles.title}>Bloodgroup : {this.props.contract}</Text>

      </View>
      
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#FFFFFF',
      alignItems:'center',
      justifyContent:'center'
    },
    title: {
      marginVertical: 4, 
      fontSize: 15, 
    },
    header: {
      marginVertical: 8, 
      fontSize: 20, 
      fontWeight: 'bold'
    },
    space: {
      width: 65, // or whatever size you need
      height: 60,
    },    
    spacel: {
      width: 10, // or whatever size you need
      height: 10,
    }
  });

export default ViewHealth
