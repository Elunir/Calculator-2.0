import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Icon } from "../icon/icon"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface HistoryProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const History = observer(function History(props: HistoryProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <TouchableOpacity style={styles}>
      <Icon icon="back" />
    </TouchableOpacity>
  )
})
