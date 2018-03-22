import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Avatar, Button, Icon } from 'react-native-elements'
import Shop from './Shop'

const Item = (props) => (
    
    <View>
    <ListItem

        avatar= {props.avatar}
        key={props.id}
        title={props.name} 
      />
    <Button
  title='Add to cart'
/>
  </View>
);

export default Item;