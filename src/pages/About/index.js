import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
} from 'react-native';

import image from '../../assets/image.jpeg';

import Styles from './styles';

export function About({ navigation }) {
  return(
    <KeyboardAvoidingView
      style={ Styles.container }
      behavior="padding"
      enabled={ Platform.OS === 'ios' }
    >
      <Text style={ Styles.title }>Obrigado por baixar este app!</Text>

      <Text style={ Styles.subTitle }>Aplicativo desenvolvido por <Text style={{ fontFamily: 'Roboto_500Medium'}}>Fernando Ridam</Text> sem fins lucrativos e baseado na imagem abaixo:</Text>

      <Image source={ image } style={ Styles.image } />

      <Text style={ Styles.footer }>*Creditos na imagem!</Text>
    </KeyboardAvoidingView>
  );
};
