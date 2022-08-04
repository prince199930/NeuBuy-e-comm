import { View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../Screen/Home/HomeScreen'
import OrderItem from './OrderItem'
import StyleMyOrders from '../Assets/Style/StyleMyOrders'
import CommonTopBar from './CommonTopBar'
import { uiConstants } from '../Assets/uiConstants'

const MyOrders = ({ navigation }) => {
  const order = useSelector((state: StateType) => state.order)
  return (
    <>
      <CommonTopBar
        Header={uiConstants.myOrders}
        style={StyleMyOrders.bgcolor}
        navigation={navigation}
        display={false}
      />
      <View>
        <View style={StyleMyOrders.list}>
          <FlatList
            data={order}
            renderItem={({ item, index }) => (
              <View key={index}>
                <OrderItem item={item} />
              </View>
            )}
          />
        </View>
        </View>

      </>
      )
}

      export default MyOrders
