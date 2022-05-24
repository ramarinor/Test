import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, FontSize }) {
  const base = {
    borderWidth: 1,
    borderColor: Colors.text,
    backgroundColor: Colors.inputBackground,
    color: Colors.text,
    alignSelf: 'stretch',
    textAlign: 'center',
    ...Gutters.largeHMargin,
    ...Gutters.smallVMargin,
    fontFamily: 'Arial',
  }
  return StyleSheet.create({
    base,
    regular: { ...base, fontSize: FontSize.regular, minHeight: 40 },
    large: {
      ...base,
      minHeight: 80,
      fontSize: FontSize.large,
    },
  })
}
