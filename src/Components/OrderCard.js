import { useTheme } from '@/Hooks'
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
const getQuantity = order => {
  return order.products.reduce((sum, item) => sum + item.quantity, 0)
}
const OrderCard = ({ order }) => {
  const { Common } = useTheme()
  return (
    <View style={Common.orderCard.container}>
      <ImageBackground
        style={Common.orderCard.imageBackground}
        source={{ uri: order.shop.imageUrl }}
        resizeMode="cover"
      >
        <Text style={Common.orderCard.imageText}>{order.shop.name}</Text>
      </ImageBackground>
      <View style={Common.orderCard.details}>
        <Text>{getQuantity(order)} produkte</Text>
        <Text style={Common.orderCard.price}>{order.sum} Lekë</Text>
        <TouchableOpacity style={Common.orderCard.button}>
          <Text style={Common.orderCard.buttonText}>
            {order.completed ? 'SHIKO' : 'KU JE?'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderCard
