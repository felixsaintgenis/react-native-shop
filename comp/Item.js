import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements'
import Shop from './Shop'

const Item = (props) => (
  
    <ListItem

        avatar= {props.avatar}
        key={props.id}
        title={props.name} 
      />
  
);

export default Item;