import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
  },

  logo: {
    width: 190,
    height: 190,
  },

  title: {
    fontSize: 30,
    fontFamily: 'Roboto_900Black',
    color: '#4D4D4D',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 205,
    height: 75,
    paddingHorizontal: 20,
    borderRadius: 65,
    backgroundColor: '#0E92A1',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,

    elevation: 6,
  },

  textButton: {
    fontSize: 30,
    fontFamily: 'Roboto_900Black',
    color: '#FFF',
  },

  buttonAbout: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },

  aboutText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    fontFamily: 'Roboto_500Medium',
    color: '#0E92A1',
  },
});

export default Styles;
