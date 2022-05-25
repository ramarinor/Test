import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, FontSize }) {
  return StyleSheet.create({
    container: {
      height: 100,
      ...Gutters.smallVMargin,
      ...Gutters.largeHPadding,
    },
    imageBackground: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 2,
      borderBottomWidth: 0,
      borderColor: Colors.grey,
    },
    imageText: {
      color: Colors.white,
      fontSize: FontSize.regular,
      fontWeight: 'bold',
    },
    details: {
      flex: 3,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: Colors.white,
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...Gutters.smallHPadding,
    },
    price: {
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: Colors.primary,
      ...Gutters.largeHPadding,
      borderRadius: 10,
    },
    buttonText: {
      color: Colors.white,
    },
  })
}
