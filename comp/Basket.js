import React from 'react';
import { View, Text } from 'react-native';

export default class Header extends React.Component {

    render () {
       return( <View>
               <Header
                    centerComponent={{ text: 'Mon panier', style: { color: '#fff' } }}
      
                    />
       </View>    
       );
    }

}
