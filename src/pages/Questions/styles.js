import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 30,
    fontFamily: 'Roboto_900Black',
    color: '#4D4D4D',
  },

  cardStack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 475,
  },

  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  buttonViewFinish: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 135,
    height: 55,
    borderRadius: 65,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,

    elevation: 6,
  },

  buttonNo: {
    backgroundColor: '#9F3F3F',
  },

  buttonYes: {
    backgroundColor: '#0E92A1',
  },

  textButton: {
    fontSize: 25,
    fontFamily: 'Roboto_900Black',
    color: '#FFF',
  },

  textButtonFinish: {
    fontSize: 15,
    fontFamily: 'Roboto_900Black',
    color: '#FFF',
  },

  iconButton: {
    position: 'absolute',
    top: -10,
    opacity: .30,
  }
});

export default Styles;
