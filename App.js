import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'
import { Divider } from 'react-native-elements'

//components 
import Shop from './comp/Shop'
import Items from './comp/Items'
import HomeScreen from './Homescreen'
import Basket from './comp/Basket'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
  
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Amazon Clothes', style: { color: '#fff' } }}
  rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
/>  
<SearchBar
  lightTheme
  round
  placeholder='Search a product...' />
       
        <Items />
     <Basket />
  
      </View>
      
    );
  }
}

