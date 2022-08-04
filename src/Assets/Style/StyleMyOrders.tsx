import { StyleSheet } from 'react-native'
import color from '../colors'

const StyleMyOrders = StyleSheet.create({
    container:{
     width:'95%',
     height:'auto',
     backgroundColor:color.white,
     borderRadius: 10,
     marginBottom: 20,
     padding:15,
     left:10,
     elevation:1
   
    },
    ordernum:{
      display:"flex",
       flexDirection:"row",
        justifyContent:"space-between"
    },
    objects:{
      flexDirection:"row", marginTop:30, marginBottom:-20
    },
    object:{
      marginTop:27, marginRight:7
    },
      font:{
        fontSize:35,
        flexDirection:'row',
        left:125
      },
      orderNum:{
        fontWeight:'800'
      },
      list: {
        height: '90%',
        width: 'auto',
      },
      bgcolor:{
        backgroundColor:color.cultured,
      },
      title:{
        width:250
      },
      quantity:{
        flexDirection:"row"
      },
   

  image:{
       resizeMode: 'stretch',
        height:100,
        width:100,
        bottom:30,
        borderRadius: 10,
       shadowRadius: 100,
     
      },
      divider:{
        flex: 1, height: 1, borderColor:'grey', borderWidth:0.2
      },
   
   })


export default StyleMyOrders

