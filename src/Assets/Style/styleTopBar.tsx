import { StyleSheet,StatusBar } from 'react-native'
import  { color } from '../colors';

const styleTopBar =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.platinum,
    },
    logo: {
        width: 30,
        height: 30,
        marginLeft:5,
        marginTop:-5
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    searchicon: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop:5
    },
    carticon: {
        width: 26,
        height: 20,
        marginRight: 8,
        marginTop:5
    },
    cartValue: {
        position: 'absolute',
        marginLeft: '95%',
        marginRight: '-2%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        height: 18,
        width:18,
        borderRadius: 18,
        backgroundColor: color.etonBlue,
      },
      cartValueText: {
        color: color.white,
      },

});

export default styleTopBar;