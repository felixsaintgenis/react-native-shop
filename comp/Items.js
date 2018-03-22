import React from 'react';
import { View, Text } from 'react-native';
import { products } from './product';
import { List, ListItem, Button } from 'react-native-elements'
import Item from './Item'


class Items extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: []}

  }

  componentDidMount () {
    this.setState({
      products: products
    });

  }
    

  
  render () {

    return (
      <List >
      
        {this.state.products.map((product) => {
      return ( 
      <Item name={product.name}
            price={product.price}
            avatar={product.avatar_url}
            icon={product.icon}
            key={product.id} 
            />
          )
    
            })}
    </List>
  );

}
}




   


  
  export default Items;
