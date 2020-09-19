import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import checkIcon from '../../assets/check.png';

import F1 from '../../assets/F1.jpg';
import F2 from '../../assets/F2.jpg';
import F3 from '../../assets/F3.jpg';
import F4 from '../../assets/F4.png';
import F5 from '../../assets/F5.jpg';
import F6 from '../../assets/F6.jpg';

import Styles from './styles';

export function CardPerson({ name, ideology, id }) {
  function getPhoto() {
    switch( id ) {
      case 'F1':
        return F1;
      case 'F2':
        return F2;
      case 'F3':
        return F3;
      case 'F4':
        return F4;
      case 'F5':
        return F5;
      case 'F6':
        return F6;
    }
  };

  return (
    <View style={ Styles.cardPerson }>
      <Image source={ checkIcon } style={ Styles.checkIcon }/>

      <Image source={ getPhoto()} style={ Styles.photo }/>

      <Text style={ Styles.name }>{ name }</Text>
      <Text style={ Styles.ideology }>{ ideology }</Text>
    </View>
  );
}
