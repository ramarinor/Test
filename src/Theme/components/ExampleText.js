import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters }) {
  const base = {
    ...Gutters.largeHPadding,
    ...Gutters.largeVPadding,
    ...Gutters.regularVMargin,
  }
  return StyleSheet.create({
    base,
    blue: {
      ...base,
      color: Colors.blue,
    },
    red: {
      ...base,
      color: Colors.red,
    },
  })
}
