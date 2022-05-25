import { useTheme } from '@/Hooks'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import OrderCard from './OrderCard'
const OrderSection = ({ title, data }) => {
  const { Fonts, Common } = useTheme()
  return (
    <View style={Common.orderSection.container}>
      <Text style={[Fonts.titleSmall, Common.orderSection.title]}>{title}</Text>

      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={() => <OrderCard />}
      />
    </View>
  )
}

export default OrderSection
