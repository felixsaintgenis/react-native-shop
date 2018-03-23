import React from 'react';
import { View, Text, Image } from 'react-native';
import { List, ListItem, Avatar, Button, Icon, Card } from 'react-native-elements'
import Shop from './Shop'


class Item extends React.Component {

    

    
    

    render () {

        return (

    <View>

  <Card
  key={this.props.id}
  title={this.props.name} 
  image={{uri: this.props.avatar}}>
  <Text style={{marginBottom: 10}}>
    {this.props.description}.
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#f4a136'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Add to cart' 
    onPress={() => this.props.addToCart(this.props.details)}/>
    
</Card>   
    {/* <ListItem

        avatar= {this.props.avatar}
        key={this.props.id}
        title={this.props.name} 
        onPress={() => this.props.addToCart(this.props.details)}
      /> */}



  </View>
);
}
}

export default Item;