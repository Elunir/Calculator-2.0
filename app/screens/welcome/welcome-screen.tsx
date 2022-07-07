import React, { FC } from "react"
import { StatusBar, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { KeyPad, History } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { styles } from "./welcome-styles"

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(() => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <History style={styles.history} />
        <KeyPad />
      </View>
    </View>
  )
})
