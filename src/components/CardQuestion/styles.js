import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  cardQuestion: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 475,
    borderRadius: 15,
    backgroundColor: '#FFF',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,

    elevation: 6,
  },

  questionIcon: {
    position: 'absolute',
    top: -15,
    right: -10,
    width: 74,
    height: 84,
  },

  question: {
    fontSize: 25,
    fontFamily: 'Roboto_500Medium',
    color: '#4D4D4D',
    width: 305,
    textAlign: 'center'
  },
});

export default Styles;
