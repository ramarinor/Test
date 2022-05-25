import { StyleSheet } from 'react-native'

export default function ({ Gutters, FontSize }) {
  return StyleSheet.create({
    container: {
      height: '50%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 32,
      marginVertical: 20,
    },
  })
}
