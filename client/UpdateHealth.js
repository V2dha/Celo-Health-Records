import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, Text, TextInput, Button, View, YellowBox, SafeAreaView} from 'react-native'
import './global'


YellowBox.ignoreWarnings(['Warning: The provided value \'moz', 'Warning: The provided value \'ms-stream'])

export class UpdateHealth extends Component {
  
  onChange = (text) => {
    this.props.change(text)
  }
     
  onChange1 = (text) => {
    this.props.change1(text)
  }

  onChange2 = (text) => {
    this.props.change2(text)
  }

  onChange3 = (text) => {
    this.props.change3(text)
  }

  onChange4 = (text) => {
    this.props.change4(text)
  }
  
  onChange5 = (text) => {
    this.props.change5(text)
  }
  
  onChange6 = (text) => {
    this.props.change6(text)
  }
  
  
    render() {
        return (
        <View styles={styles.container}>

        <ScrollView>
            {/* <Text style={styles.title}>Update your Health Records</Text> */}

        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Medications"
          onChangeText={text => this.onChange2(text)}
          />
        <Button style={{padding: 20}} title="Update Medication" 
          onPress={()=> this.props.write2()} />

        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Allergies"
          onChangeText={text => this.onChange3(text)}
          />
        <Button style={{padding: 20}} title="Update Allergies" 
          onPress={()=> this.props.write3()} />
      
        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Diseases"
          onChangeText={text => this.onChange1(text)}
          />
        <Button style={{padding: 20}} title="Update Diseases" 
          onPress={()=> this.props.write1()} />

        <TextInput
          style={{  width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Bloodgroup"
          onChangeText={text => this.onChange(text)}
          />
        <Button style={{padding: 20}} title="Update Bloodgroup" 
          onPress={()=> this.props.write()} />
        
        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Age"
          onChangeText={text => this.onChange4(text)}
          />
        <Button style={{padding: 20}} title="Update Age" 
          onPress={()=> this.props.write4()} />

        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Height"
          onChangeText={text => this.onChange5(text)}
          />
        <Button style={{padding: 20}} title="Update Height" 
          onPress={()=> this.props.write5()} />

        <TextInput
          style={{ width:200, textAlign:"center", borderColor: 'black', borderWidth: 1, backgroundColor: 'white', margin:10 }}
          placeholder="Enter Weight"
          onChangeText={text => this.onChange6(text)}
          />
        <Button style={{padding: 20}} title="Update Weight" 
          onPress={()=> this.props.write6()} />
        </ScrollView>
      </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 0,
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
  
  });

export default UpdateHealth
