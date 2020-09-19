import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  cardPerson: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 435,
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

  checkIcon: {
    position: 'absolute',
    top: -15,
    right: -10,
    width: 75,
    height: 75,
  },

  photo: {
    width: 150,
    height: 150,
  },

  name: {
    fontSize: 25,
    fontFamily: 'Roboto_500Medium',
    color: '#4D4D4D',
    textAlign: 'center',
    width: 305,
    marginTop: 10,
  },

  ideology: {
    fontSize: 21,
    fontFamily: 'Roboto_400Regular',
    color: '#4D4D4D',
    textAlign: 'center',
    width: 305,
    marginTop: 10,
  },
});

export default Styles;
