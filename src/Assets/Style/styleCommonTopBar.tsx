import { StyleSheet } from 'react-native'
import  { color } from '../colors';

const styleCommonTopBar =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 35,
        marginLeft:30,
        marginTop:-5,
    },
    iconContainer:{
        flexDirection:"row",
    },
    cartValue: {
        position: 'absolute',
        marginLeft: 20,
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
      carticon: {
        width: 26,
        height: 20,
        marginRight: 8,
        marginTop:5
    },
    backButton:{
        position:"absolute",
        elevation:10,
        marginLeft:15,
       
    },
    headerText:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"500"
    },
    headerContainer1:{ 
         
    },
    headerContainer2:{
        marginLeft:"-11%",
    }
})

export default styleCommonTopBar;