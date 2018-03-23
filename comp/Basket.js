import React from 'react';
import { View, Text } from 'react-native';
import { Header, ListItem, Card } from 'react-native-elements';

export default class Basket extends React.Component {

   

    render () {

        var total = 0;
        {this.props.cart.map((product) => {
               
            total = total + ( product.price * product.quantity )
            return 'total'
        })}

       return( <View>
               <Header
                    backgroundColor={'#f4a136'}
                    centerComponent={{ text: 'Mon panier', style: { color: '#fff' } }}
      
                    />
                {this.props.cart.length > 0 ? 
                this.props.cart.map((product) => {
                    return (
                        <View>
                        <ListItem

                            avatar= {product.avatar}
                            key={product.key}
                            title={product.name} 
                            subtitle={product.quantity}

/>
                        </View>   
                            )})
                : <Text>empty</Text>}
        
        
        <Card title="TOTAL À PAYER">
            <Text>{total}€</Text>
        </Card>             

       </View>    
       );
    }

}
