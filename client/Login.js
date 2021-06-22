import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, Text, TextInput, Button, View, YellowBox, SafeAreaView} from 'react-native'


import './global'
import { web3, kit } from './root'
import { 
  requestTxSig,
  waitForSignedTxs,
  requestAccountAddress,
  waitForAccountAuth,
  FeeCurrency
} from '@celo/dappkit'
import { toTxResult } from "@celo/connect"
import * as Linking from 'expo-linking'
import HealthRecordContract from './contracts/Healthrecords.json'


YellowBox.ignoreWarnings(['Warning: The provided value \'moz', 'Warning: The provided value \'ms-stream'])

export class Login extends Component {
  
    render() {
        return (
            <View style={styles.container}>
               <Image source={
          { width:150,
            height:150,
            alignSelf:"center",
            uri:"https://store-images.s-microsoft.com/image/apps.7226.701c66d1-5ad1-4bf7-95c3-0ae4dd37712a.0ddaaed6-60f3-4dda-a2fc-e880497d43b0.2b9242b7-36de-466c-9fcf-50b856a133c7"}}></Image>
        <Text style={styles.header}>Celo Health Records</Text>

    
        <Button  title="login" 
          onPress={()=> this.props.login()} />
         <View style={styles.space} />
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
    space: {
      width: 25, // or whatever size you need
      height: 25,
    },
  
  });

export default Login
