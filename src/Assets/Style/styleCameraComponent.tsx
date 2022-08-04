import { StyleSheet } from 'react-native';
import color from '../colors';

const cameraOptions = StyleSheet.create({
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
      },
      header: {
        margin:20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 2,
        borderRadius: 1,
        backgroundColor: color.etonBlue ,
        marginBottom: 5,
      },
      panelTitle: {
        fontSize: 25,
        height: 30,
      },
      panelSubtitle: {
        fontSize: 25,
        color: 'grey',
        height: 30,
        marginBottom:10,
        alignSelf:'center'
      },
      panelButton: {
        padding: 13,
        borderRadius: 30,
        backgroundColor: color.etonBlue,
        marginVertical: 7,
        width:'60%',
        alignSelf:'center',
        color:'white'

      },
      panelButtonTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
      },
      container:{
        borderColor:color.etonBlue,
        width:'110%',
        alignSelf:'center',
        borderRadius:15,
        position:'absolute',
        bottom:-20
      }

});

export default cameraOptions;