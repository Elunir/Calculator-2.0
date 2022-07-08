import { Platform, StyleSheet } from "react-native"
import { color } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  content:{
    flex: 1,
    justifyContent:'space-between',
    paddingVertical: Platform.OS === 'ios'?60:28
  },
  history: {
    alignItems: 'flex-end',
    marginHorizontal: 40
  },
})
