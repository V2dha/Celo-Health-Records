import React from 'react'
import './global'
import { web3, kit } from './root'
import { ScrollView, Image, StyleSheet, Text, TextInput, Button, Alert, View, YellowBox, SafeAreaView } from 'react-native'

import Login from './Login'
import ViewHealth from './ViewHealth'
import UpdateHealth from './UpdateHealth'
import Menu from './Menu'
import Pay from './Pay'

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


export default class App extends React.Component {

  // Set the defaults for the state
  state = {
    value:'null',
    address: 'Not logged in',
    phoneNumber: 'Not logged in',
    cUSDBalance: 'Not logged in',
    HealthRecordContract: {},
    contractName: '',
    textInput: '',
    contractName1: '',
    textInput1: '',
    contractName2: '',
    textInput2: '',
    contractName3: '',
    textInput3: '',
    age : 0,
    textInput4: 0,
    height : 0,
    textInput5: 0,
    weight:0,
    textInput6: 0,
    insurance:0
  }

  // This function is called when the page successfully renders
  componentDidMount = async () => {
   const networkId = await web3.eth.net.getId();
  const deployedNetwork = HealthRecordContract.networks[networkId];

  const instance = new web3.eth.Contract(
    HealthRecordContract.abi,
    deployedNetwork && deployedNetwork.address
    );

    // Save the contract instance
  this.setState({ HealthRecordContract: instance })
  }

  // Start of the Login Function
  login = async () => {
    const requestId = 'login'    // A string you can pass to DAppKit, that you can use to listen to the response for that request
    const dappName = 'Celo Health Records'    // A string that will be displayed to the user, indicating the DApp requesting access/signature
    const callback = Linking.makeUrl('/my/path')  // The deeplink that the Celo Wallet will use to redirect the user back to the DApp with the appropriate payload.
    requestAccountAddress({   // Ask the Celo Alfajores Wallet for user info
      requestId,
      dappName,
      callback,
    })
  
   
  const dappkitResponse = await waitForAccountAuth(requestId)   // Wait for the Celo Wallet response
  kit.defaultAccount = dappkitResponse.address  // Set the default account to the account returned from the wallet
  const stableToken = await kit.contracts.getStableToken()  // Get the stabel token contract
  const cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount) // Get the user account balance (cUSD)
  let cUSDBalance = cUSDBalanceBig.toString()    // Convert from a big number to a string
  this.setState({ cUSDBalance,                         // Update state
                    isLoadingBalance: false,       
                    address: dappkitResponse.address, 
                    phoneNumber: dappkitResponse.phoneNumber })
  Alert.alert("Login Successful")
  }
  // End of Login Function


  // Read Function
  read = async () => {
  let bg = await this.state.HealthRecordContract.methods.getBloodgroup().call() // Read the name stored in the contract
  this.setState({ contractName: bg }) // Update state
  }

  read1 = async () => {
  let disease = await this.state.HealthRecordContract.methods.getDisease().call()  // Read the name stored in the contract
  this.setState({ contractName1 :disease })  // Update state
}

  read2 = async () => {
    let medication = await this.state.HealthRecordContract.methods.getMedication().call()  // Read the name stored in the contract
    this.setState({ contractName2: medication })   // Update state
  }

  read3 = async () => {
    let allergies = await this.state.HealthRecordContract.methods.getAllergy().call()  // Read the name stored in the contract
    this.setState({ contractName3: allergies })   // Update state
  }

  read4 = async () => {
    let ag = await this.state.HealthRecordContract.methods.getAge().call()  // Read the name stored in the contract
    this.setState({ age: ag })   // Update state
  }

  read5 = async () => {
    let ht = await this.state.HealthRecordContract.methods.getHeight().call()  // Read the name stored in the contract
    this.setState({ height: ht })   // Update state
  }

  read6 = async () => {
    let wt = await this.state.HealthRecordContract.methods.getWeight().call()  // Read the name stored in the contract
    this.setState({ weight: wt })   // Update state
  }

  read7 = async () => {
    let ins = await this.state.HealthRecordContract.methods.getInsurance().call()  // Read the name stored in the contract
    this.setState({ insurance: ins })   // Update state
  }
  // Read Function


  // Write Function
  write = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setBloodgroup(this.state.textInput)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(     // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )

    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()   // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  write1 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setDisease(this.state.textInput1)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  write2 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setMedication(this.state.textInput2)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  
  write3 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setAllergy(this.state.textInput3)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  write4 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setAge(this.state.textInput4)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  write5 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setHeight(this.state.textInput5)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }


  write6 = async () => {
    const requestId = 'update_name'
    const dappName = 'Celo Health Records'
    const callback = Linking.makeUrl('/my/path')
    const txObject = await this.state.HealthRecordContract.methods.setWeight(this.state.textInput6)  // Create a transaction object to update the contract with the 'textInput'
    requestTxSig(                        // Send a request to the Celo wallet to send an update transaction to the contract
      kit,
      [
        {
          from: this.state.address,
          to: this.state.HealthRecordContract.options.address,
          tx: txObject,
          feeCurrency: FeeCurrency.cUSD
        }
      ],
      { requestId, dappName, callback }
    )
    const dappkitResponse = await waitForSignedTxs(requestId)     // Get the response from the Celo wallet
    const tx = dappkitResponse.rawTxs[0]
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()  // Get the transaction result, once it has been included in the Celo blockchain
    console.log(`Hello World contract update transaction receipt: `, result)  
    Alert.alert('Updated Successfully')
  }

  write7 = async() => {
    await this.HealthRecordContract.methods.setInsurance().send()
  }
  // Write Function


  //setValue Function
  setView = async () => {
    this.setState({value: 'View'})
  }
  
  setUpdate = async () => {
    this.setState({value: 'Update'})
  }

  setPay = async () => {
    this.setState({value: 'Pay'})
  }
 //setValue Function


  //Onlogin Function
  renderElement(){
    if(this.state.address != 'Not logged in')
       return <View>
         <Menu setView={this.setView} setUpdate={this.setUpdate} setPay={this.setPay}/>
         </View>;
    else {
      <Text>Please download the Celo Wallet from the PlayStore and Try Again!</Text>
    }
    // return <Text>Install Celo Wallet to login</Text>
 }
//Onlogin Function

  // Update Function
  onChangeText = async (text) => {
    this.setState({textInput: text})
  }

  onChangeText1 = async (text) => {
    this.setState({textInput1: text})
  }

  onChangeText2 = async (text) => {
    this.setState({textInput2: text})
  }

  onChangeText3 = async (text) => {
    this.setState({textInput3: text})
  }

  onChangeText4 = async (text) => {
    this.setState({textInput4: text})
  }

  onChangeText5 = async (text) => {
    this.setState({textInput5: text})
  }

  onChangeText6 = async (text) => {
    this.setState({textInput6: text})
  }
  // Update Function


 //Render menu
  renderNext(){
    if (this.state.value == 'View')
        return <View>
          <ViewHealth phoneNumber={this.state.phoneNumber}
          contract={this.state.contractName} 
          contract1={this.state.contractName1} 
          contract2={this.state.contractName2} 
          contract3={this.state.contractName3} 
          contract4={this.state.age} 
          contract5={this.state.height} 
          contract6={this.state.weight} 
          read={this.read} read1={this.read1} read2={this.read2} read3={this.read3}  read4={this.read4}  read5={this.read5}  read6={this.read6}/>
          </View>;

    else if (this.state.value == 'Update')
        return <View> 
          <UpdateHealth change={this.onChangeText} 
          change1={this.onChangeText1} 
          change2={this.onChangeText2} 
          change3={this.onChangeText3}
          change4={this.onChangeText4} 
          change5={this.onChangeText5} 
          change6={this.onChangeText6}  
          write={this.write} write1={this.write1} write2={this.write2} write3={this.write3} write4={this.write4} write5={this.write5} write6={this.write6}/> 
          </View>;

    else if (this.state.value == 'Pay')
        return <View> 
          <Pay write7={this.write7} read7={this.read7} ins={this.state.insurance}/> 
        </View>;
  }
  //Render menu

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Login login={this.login}/> 
        {this.renderElement()}
        {this.renderNext()}
      </SafeAreaView>
    );
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

});
