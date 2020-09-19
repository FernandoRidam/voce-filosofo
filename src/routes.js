import React from 'react';

import {
  TouchableOpacity,
} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  FontAwesome,
} from '@expo/vector-icons';

import {
  Main,
  Questions,
  About,
} from './pages';

const Stack = createStackNavigator();

export default function Routes() {
  const headerOpstions = {
    headerTintColor: '#FFF',
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontFamily: 'Roboto_300Light',
      fontSize: 25,
    },
    headerStyle: {
      backgroundColor: '#0E92A1',
    },
  };

  function BackImageArrowLeft( props ) {
    return (
      <TouchableOpacity
        { ...props }
        style={{
          marginLeft: 10,
        }}
        activeOpacity={ 0.6 }
      >
        <FontAwesome name="angle-left" size={38} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Main"
          component={ Main }
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Questions"
          component={ Questions }
        />

        <Stack.Screen
          options={{
            title: 'Sobre',
            headerLeft: BackImageArrowLeft,
            ...headerOpstions,
          }}
          name="About"
          component={ About }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
