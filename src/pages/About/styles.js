import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 25,
    fontFamily: 'Roboto_900Black',
    color: '#4D4D4D',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    color: '#4D4D4D',
    marginTop: 10,
    textAlign: 'center',
  },

  image: {
    width: 335,
    height: 445,
    marginTop: 5,
  },

  footer: {
    fontSize: 15,
    fontFamily: 'Roboto_500Medium',
    color: '#4D4D4D',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Styles;
