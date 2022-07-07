import { Dimensions, StyleSheet } from "react-native"
import { color } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  content:{
    flex: 1,
    justifyContent:'space-between',
    paddingVertical: 60
  },
  history: {
    alignItems: 'flex-end',
    marginHorizontal: 40
  },
})
