import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import questionIcon from '../../assets/faq.png';

import Styles from './styles';

export function CardQuestion({ question }) {
  return (
    <View style={ Styles.cardQuestion }>
      <Image source={ questionIcon } style={ Styles.questionIcon }/>

      <Text style={ Styles.question }>{ question }</Text>
    </View>
  );
}
