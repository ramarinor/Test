import React from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'

const ExampleContainer = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Images,
    Layout,
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
  } = useTheme()

  return (
    <View style={[Layout.fill, Common.example.blackBorder]}>
      <ScrollView
        style={[Layout.fill]}
        contentContainerStyle={[
          Layout.fill,
          Layout.colCenter,
          Gutters.smallPadding,
        ]}
      >
        <Text
          style={[
            Fonts.titleRegular,
            Common.exampleText.blue,
            Common.example.blackBorder,
          ]}
        >
          Text 1
        </Text>
        <Text
          style={[
            Common.example.blackBorder,
            Fonts.textRegular,
            Common.exampleText.red,
          ]}
        >
          Text 2
        </Text>
        <TextInput style={[Common.textInput.regular]} />
        <TextInput style={[Common.textInput.regular]} />
      </ScrollView>
    </View>
  )
}

export default ExampleContainer
