import React, { Component } from 'react'
import 'react-native-gesture-handler'
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

export class Pay extends Component {

  componentDidMount(){
    this.props.write7();
    this.props.read7();
  }

    render() {
        return (
        <View style={styles.container}>
          <View style={styles.space} />
        <Text>Based on your Health Records </Text>
        <Text>you can buy Insurance Premium at: {this.props.ins} CUSD</Text>
        <View style={styles.spacel} />

        <Button style={{padding: 30}} title="Buy using Celo Wallet"/>

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
      width: 55, // or whatever size you need
      height: 55,
    },    
    spacel: {
      width: 10, // or whatever size you need
      height: 10,
    }
  });

export default Pay
