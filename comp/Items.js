import React from 'react';
import { View, Text } from 'react-native';
import { products } from './product';
import Basket from './Basket';
import { List, ListItem, Button } from 'react-native-elements'
import Item from './Item'


class Items extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
    { products: [],
      cart: [],
  
    }

  }

  componentDidMount () {
    this.setState({
      products: products
    });

  }

  addToCart = (item) => {
    var found = false;
    var updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name == item.name) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    
    if (!found) { updatedCart.push({key: updatedCart.length + 1, id: item.id, name: item.name, price: item.price, quantity: 1}) }
    
    this.setState({
      cart: updatedCart
    });
  }
  
  render () {

    return (
      <View>
      <List >
      
        {this.state.products.map((product) => {
      return (
      <Item name={product.name}
            price={product.price}
            avatar={product.avatar_url}
            icon={product.icon}
            key={product.id} 
            addToCart={() => this.addToCart(product)}
            details={product}
            
            />
          )
    
            })}
    </List>
    <Basket cart={this.state.cart} />
    </View>
  );

}
}




   


  
  export default Items;
