import { useTheme } from '@/Hooks'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
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
        <Text>22 produkte</Text>
      </View>
    </View>
  )
}

export default OrderCard
