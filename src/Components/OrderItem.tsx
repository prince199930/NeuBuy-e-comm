import { View, Text, Image} from 'react-native'
import React from 'react'
import { uiConstants } from '../Assets/uiConstants'
import StyleMyOrders from '../Assets/Style/StyleMyOrders'

const OrderItem = ({item}) => {
  return (
    <View style={StyleMyOrders.container} >
      <View style={StyleMyOrders.ordernum}>
        <View>
        <Text style={StyleMyOrders.orderNum}>{uiConstants.orderNumber}</Text>
       <Text>{item.orderId}</Text>
       </View>
       <View>
       <Text style={StyleMyOrders.orderNum}>{uiConstants.orderDate}</Text>
       <Text>{item.today}</Text>
       </View>
        </View>
  

       {item.items.map((obj,index)=>{
         return(
           <View key={index}>
           <View style={StyleMyOrders.objects}>
             <View style={StyleMyOrders.object}>
           <Image style={StyleMyOrders.image}source={{ uri: `${obj.image}` }}/>
           </View>
           <View>
             <View>
           <Text style={StyleMyOrders.title}>{obj.title}</Text>
           <Text>Price: {uiConstants.rupeeSign} {obj.price}</Text>
           </View>
           <View style={StyleMyOrders.quantity}>
           <Text>{uiConstants.qty}</Text>
           <Text>{obj.quantity}</Text>
           </View>
           </View>
           </View>
           <View style={StyleMyOrders.divider} />
           </View>
           
         )
       })}
     <Text>Total Amount : {uiConstants.rupeeSign} {item.totalValue}</Text>
      
    </View>
    
    
  )}


export default OrderItem
