/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import exampleStyles from './components/Example'
import exampleTextStyles from './components/ExampleText'
import textInputStyles from './components/TextInputs'
import orderSectionStyles from './components/OrderSection'
import orderCardStyles from './components/OrderCard'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    example: exampleStyles({ Colors, ...args }),
    textInput: textInputStyles({ Colors, ...args }),
    exampleText: exampleTextStyles({ Colors, ...args }),
    orderSection: orderSectionStyles({ ...args }),
    orderCard: orderCardStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundWhite: {
        backgroundColor: Colors.white,
      },
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
    }),
  }
}
