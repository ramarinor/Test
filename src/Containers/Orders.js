import OrderSection from '@/Components/OrderSection'
import { useTheme } from '@/Hooks'
import React from 'react'
import { View } from 'react-native'
const DATA = [
  {
    _id: 1,
    sum: 4400,
    products: [
      { _id: 1, quantity: 1 },
      { _id: 2, quantity: 1 },
      { _id: 3, quantity: 1 },
      { _id: 4, quantity: 1 },
      { _id: 5, quantity: 1 },
      { _id: 6, quantity: 1 },
    ],
    shop: {
      _id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      name: 'Brasserie Toka',
    },
    completed: false,
  },
  {
    _id: 2,
    sum: 4400,
    products: [
      { _id: 1, quantity: 2 },
      { _id: 2, quantity: 3 },
      { _id: 3, quantity: 4 },
      { _id: 4, quantity: 1 },
      { _id: 5, quantity: 10 },
      { _id: 6, quantity: 2 },
    ],
    shop: {
      _id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      name: 'SPAR',
    },
    completed: false,
  },
  {
    _id: 3,
    sum: 1000,
    products: [{ _id: 1, quantity: 2 }],
    shop: {
      _id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      name: 'Goodies Farm',
    },
    completed: true,
  },
  {
    _id: 4,
    sum: 4400,
    products: [
      { _id: 1, quantity: 1 },
      { _id: 2, quantity: 2 },
      { _id: 3, quantity: 3 },
      { _id: 4, quantity: 4 },
    ],
    shop: {
      _id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      name: 'Conad',
    },
    completed: true,
  },
  {
    _id: 5,
    sum: 1000,
    products: [
      { _id: 1, quantity: 1 },
      { _id: 2, quantity: 1 },
    ],
    shop: {
      _id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
      name: 'Papirun',
    },
    completed: true,
  },
]
const Orders = () => {
  const { Common } = useTheme()
  return (
    <View style={Common.backgroundWhite}>
      <OrderSection
        title={'Aktuale'}
        data={DATA.filter(order => !order.completed)}
      />
      <OrderSection
        title={'Të kaluara'}
        data={DATA.filter(order => order.completed)}
      />
    </View>
  )
}

export default Orders
