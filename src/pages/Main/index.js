import React from 'react';

import {
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import philosophy from '../../assets/philosophy.png';

import Styles from './styles';

export function Main({ navigation }) {

  function handleNavigation( route ) {
    navigation.navigate( route );
  };

  return (
    <KeyboardAvoidingView
      style={ Styles.container }
      behavior="padding"
      enabled={ Platform.OS === 'ios' }
    >
      <Image style={ Styles.logo } source={ philosophy } />

      <Text style={ Styles.title }>QUAL FILÓSOFO VOCÊ É?</Text>

      <TouchableOpacity
        activeOpacity={ .6 }
        style={ Styles.button }
        onPress={() => handleNavigation('Questions')}
      >
        <Text style={ Styles.textButton }>INICIAR</Text>

        <FontAwesome name="chevron-right" size={ 30 } color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={ .6 }
        style={ Styles.buttonAbout }
        onPress={() => handleNavigation('About')}
      >
        <Text style={ Styles.aboutText }>SOBRE</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
