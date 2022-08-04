import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from '../colors';

export const CheckoutbuttonStyles = StyleSheet.create({
  btnstyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: color.black,
    shadowColor: color.black,
    shadowOpacity: 0.9,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    padding: 15,

  },
  btnstyle1: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight:'400'
  },
  container: {
    left: 10,
    width: "90%",
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 15,
    padding: 15,
    elevation: 5,
  },

  dropdown: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 30,
    width: '90%',
    backgroundColor: color.etonBlue,
    padding: 4,
    borderRadius: 6,
    minHeight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'


  },
  newAddressButton: {
    width: '90%',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: color.platinum,
    shadowColor: color.black,
    shadowOpacity: 0.9,
    elevation: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    padding: 4,
    borderWidth: 2,
    borderColor: color.etonBlue,
    marginLeft: 20,

  },
  logo: {
    top: 30,
    marginHorizontal: 10,
    height: 50,
    width: 30
  },
  Name: {
    left: 25,
    fontSize: 13,
    top: 7
  },

  payment: {
    marginVertical: 5,
    top: 15,
    left: 25,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Card: {
    height: 300,
    width: "90%",
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 17,
    padding: 15,
    elevation: 5,
    left: 10
  },
  dropbox: {
    fontSize: 22,
    position: 'absolute',
    left: 13
  },
  font: {
    fontWeight: '500',
    color: Colors.black

  },
  cartValue: {
    marginLeft: 10,
    height: 17,
    width: 17,
    paddingLeft: 5,
    borderRadius: 8.5,
    backgroundColor: color.etonBlue,
    bottom: 25

  },
  bgcolor: {
    backgroundColor: color.cultured,
  },
  newaddressText: {
    fontSize: 24
  },
  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: color.etonBlue,
    height: 50,
    width: '75%',
    alignSelf: 'center',
    marginVertical: 40,
  },
  billText: {
    fontSize: 22
  },
  noAddress: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
});
