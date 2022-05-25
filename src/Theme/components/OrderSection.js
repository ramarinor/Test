import { StyleSheet } from 'react-native'

export default function ({ Gutters }) {
  return StyleSheet.create({
    container: {
      height: '50%',
      ...Gutters.largeHMargin,
    },
    title: {
      ...Gutters.regularVMargin,
    },
  })
}
