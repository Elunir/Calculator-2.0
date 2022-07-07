import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"

const CONTAINER: ViewStyle = {
  alignSelf: "flex-end",
  marginBottom: 40,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 28,
  color: color.palette.carbon,
  alignSelf:'flex-end'
}
const RESULT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 32,
  color: color.palette.carbon,
  alignSelf:'flex-end'
}

export interface HistoryCalculationsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  history?: {
    firstNumber: string,
    secondNumber: string,
    operator: string
    result: string
  }
}

/**
 * Describe your component here
 */
export const HistoryCalculations = observer(function HistoryCalculations(
  props: HistoryCalculationsProps,
) {
  const { style,history } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <Text style={TEXT}>{history.firstNumber+ history.operator + history.secondNumber}</Text>
      <Text style={RESULT}>={history.result}</Text>
    </View>
  )
})
