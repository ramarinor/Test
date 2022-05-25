import { StyleSheet } from 'react-native'

export default function ({ Gutters, FontSize }) {
  return StyleSheet.create({
    container: {
      height: '50%',
    },
    title: {
      ...Gutters.regularVMargin,
      ...Gutters.largeHPadding,
      fontSize: FontSize.large,
      fontWeight: 'bold',
    },
  })
}
