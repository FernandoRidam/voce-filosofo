import React, { useState, useEffect } from 'react';

import {
 KeyboardAvoidingView,
 Text,
 TouchableOpacity,
 View,
 Platform,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import {
  CardPerson,
  CardQuestion,
} from '../../components';

import ways from '../../utils/jsonWays.json';

import Styles from './styles';

export function Questions({ navigation }) {
  const [ selectedCardId, setSelectedCardId ] = useState('A0');
  const [ selectedCard, setSelectedCard ] = useState([]);

  function handleNavigation( route ) {
    navigation.navigate( route );
  };

  useEffect(() => {
    setSelectedCard( ways.filter( way => selectedCardId === way.id )[0]);
  }, [ selectedCardId ]);

  return (
    <KeyboardAvoidingView
      style={ Styles.container }
      behavior="padding"
      enabled={ Platform.OS === 'ios' }
    >
      {
        selectedCard.type === 'person'
          ? <>
              <Text style={ Styles.title }>Você é...</Text>
              <CardPerson
                name={ selectedCard.name }
                ideology={ selectedCard.ideology }
                id={ selectedCard.id }
              />
            </>
          : <CardQuestion
              question={ selectedCard.question }
            />
      }

      <View style={ Styles.buttonView }>
        {
          selectedCard.type === 'person'
            ? <>
                <View />

                <TouchableOpacity
                  activeOpacity={ .6 }
                  style={[ Styles.button, Styles.buttonYes ]}
                  onPress={() => handleNavigation('Main')}
                >
                  <Text style={ Styles.textButtonFinish }>FINALIZAR</Text>

                  <FontAwesome
                    name="check"
                    size={ 71 }
                    color="white"
                    style={ Styles.iconButton }
                  />
                </TouchableOpacity>

                <View />
              </>
            : <>
                <TouchableOpacity
                  activeOpacity={ .6 }
                  style={[ Styles.button, Styles.buttonNo ]}
                  onPress={() => setSelectedCardId( selectedCard.no )}
                >
                  <Text style={ Styles.textButton }>NÃO</Text>

                  <FontAwesome
                    name="close"
                    size={ 71 }
                    color="white"
                    style={ Styles.iconButton }
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={ .6 }
                  style={[ Styles.button, Styles.buttonYes ]}
                  onPress={() => setSelectedCardId( selectedCard.yes )}
                >
                  <Text style={ Styles.textButton }>SIM</Text>

                  <FontAwesome
                    name="check"
                    size={ 71 }
                    color="white"
                    style={ Styles.iconButton }
                  />
                </TouchableOpacity>
              </>
        }
      </View>
    </KeyboardAvoidingView>
  );
};
