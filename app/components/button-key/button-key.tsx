import * as React from "react"
import { StyleProp, TextStyle,ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { TouchableOpacity } from "react-native-gesture-handler"

const CONTAINER: ViewStyle = {
  height: 76,
  backgroundColor: color.primary,
  justifyContent: "center",
  alignItems: "center",
  width: 76,
  borderRadius: 50,
  margin: 4,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 28,
  fontWeight: "bold",
  color: color.palette.white,
}

export interface ButtonKeyProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  text?: React.ReactNode
  buttonColor?: string
  onPress?: ()=>void
}

/**
 * Describe your component here
 */
export const ButtonKey = observer(function ButtonKey(props: ButtonKeyProps) {
  const { style, text, buttonColor, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <TouchableOpacity style={[styles, { backgroundColor: buttonColor || color.primary }]} onPress={onPress}>
      <Text
        style={[
          TEXT,
          {
            color:
              buttonColor === color.palette.rainyGrey ? color.palette.black : color.palette.white,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
})
