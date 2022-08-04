import {StyleSheet} from 'react-native';
import {color} from '../colors';

    const profilePageStyle= StyleSheet.create({
         screenContainer: {
            backgroundColor: color.cultured,
        },
     
        avatar: {
            height:100,
            width:100,
            marginLeft:150,
            marginBottom:75,
            borderRadius:80,
            marginTop:20
            
        },
    
        myaccount:{
            color:color.eerieBlack,
            fontSize:35,
            marginLeft:10,
            marginBottom:30,
        },
    
        signoutBtn: {
            width: 412,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 180,
            backgroundColor: color.eerieBlack,
        },
    
        signoutText:{
            fontSize:16,
            color:color.white,
            
        },
    
        inputView:{
            marginTop:-70,
            marginBottom:40,
            backgroundColor: color.white,
            width:'25%',
            marginLeft:150,
            height:25,
            borderColor:color.platinum,
            borderWidth:2,
            borderRadius:2
        },

        username:{
            flex:1,
            textAlign:'center',
            fontSize:12,
            marginTop:2
        },

        buttonContainer:{

            width:415,
            marginTop:-1.6,
            height:40,
            backgroundColor:color.white,
            justifyContent:'center',
            borderColor:color.silver,
            borderWidth:2,
        },
        buttonText:
        {
            color:color.charcoal,
            width:'100%',
            fontSize:16,
            marginLeft:10
        },
        bgcolor:{
            backgroundColor: color.cultured
          }
    });

export default profilePageStyle;