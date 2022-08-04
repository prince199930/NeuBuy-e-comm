import { StyleSheet } from 'react-native';
import color from '../colors';

const addressPageStyle = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        backgroundColor: color.platinum,
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: color.white,
        borderColor: color.white,
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        width: '85%',
        alignSelf: 'center'

    },
    text: {
        flex: 1,
        fontSize: 14,
        color: color.addresstextcolor,
        textAlign: 'left',
        marginLeft: -190,
    },
    button: {
        width: '78%',
        marginTop:30,
    },
    header: {
        fontSize: 30,
        marginTop: 20,
        marginLeft: 25,
        color: color.textblack

    },
    addressButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: color.etonBlue,
        height: 50,
        width: '80%',
        marginVertical: 10,
        marginLeft:75
    },
    buttonText: {
        fontSize:16
    },
    text2: {
        marginBottom: -15,
        marginTop: 20,
        marginLeft: 32,
        fontSize: 16,
        color: color.darkgrey
    },
    deletePosition: {
        marginLeft: "90%",
        marginTop: -25

    },
    deleteAddress: {
        height: 30,
        width: 30

    },
    bgcolor: {
        backgroundColor: color.platinum,
        marginTop:5
    },
    name: {
        fontWeight: '500',
        fontSize: 16,
    },
    blankText:{
        alignSelf:'center',
        marginTop:260,
        marginBottom:190
    },
    blankView:{
        fontSize:25
    }



});

export default addressPageStyle;