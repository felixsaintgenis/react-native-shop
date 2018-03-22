import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class Basket extends React.Component {

    render () {
       return( <View>
               <Header
                    centerComponent={{ text: 'Mon panier', style: { color: '#fff' } }}
      
                    />
       </View>    
       );
    }

}
