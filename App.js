import React from 'react';

import moment from 'moment';
import br from 'moment/locale/pt-br';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/dev';

import {
  StatusBar,
  YellowBox,
} from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
]);

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  return fontsLoaded ? (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0E92A1"/>

      <Routes />
    </>
  ) : <></>;
};
