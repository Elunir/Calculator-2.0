/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { ButtonKey } from "../button-key/button-key"
import { color } from "../../theme"
import { Text } from "../../components"
import { useStores } from "../../models"

const CONTAINER: ViewStyle = {
  flexDirection: "column-reverse",
  alignSelf: "center",
}

const ROW: ViewStyle = {
  flexDirection: "row",
}

const RESULT: TextStyle = {
  alignSelf: "flex-end",
  fontSize: 72,
  marginBottom: 16,
  marginRight: 8,
  flexWrap: "wrap",
}

export interface KeyPadProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */

export const KeyPad = observer(function KeyPad(props: KeyPadProps) {
  const { style } = props
  const styles = Object.assign({}, CONTAINER, style)

  const [prevNumber, setPrevNumber] = React.useState("")
  const [currentNumber, setCurrentNumber] = React.useState("")
  const [operator, setOperator] = React.useState("")
  const [result, setResult] = React.useState("0")

  const { calculatorStore } = useStores()
  const { saveHistory } = calculatorStore
  const handleNumber = (number: string) => {
    if (number === "." && currentNumber.includes(".")) return
    setCurrentNumber(currentNumber + number)
  }
  const handleOperator = (operator: string) => {
    if (currentNumber === "") {
      setOperator(operator)
      return
    }
    if (prevNumber !== "") {
      calculateResult()
    }
    setOperator(operator)
    setPrevNumber(currentNumber)
    setCurrentNumber("")
  }
  const calculateResult = () => {
    if (prevNumber !== "" && operator !== "" && currentNumber !== "") {
      switch (operator) {
        case "+":
          setResult(String(parseFloat(prevNumber) + parseFloat(currentNumber)))
          break
        case "-":
          setResult(String(parseFloat(prevNumber) - parseFloat(currentNumber)))
          break
        case "*":
          setResult(String(parseFloat(prevNumber) * parseFloat(currentNumber)))
          break
        case "/":
          setResult(String(parseFloat(prevNumber) / parseFloat(currentNumber)))
          break
        case "%":
          setResult(String(parseFloat(prevNumber) % parseFloat(currentNumber)))
          break
        default:
          return
      }
      saveHistory(prevNumber, currentNumber, operator)
      setPrevNumber(result)
      setOperator("")
      setCurrentNumber("")
    }
  }
  const allClear = () => {
    setPrevNumber("")
    setOperator("")
    setCurrentNumber("")
    setResult("0")
  }

  const clear = () => {
    if (currentNumber) setCurrentNumber(currentNumber.slice(0, -1))
    if (!currentNumber && operator) setOperator("")
    if (!currentNumber && !operator && prevNumber) setPrevNumber(prevNumber.slice(0, -1))
    if (!currentNumber && !operator && prevNumber && result) setResult(result.slice(0, -1))
  }

  React.useEffect(() => {
    console.log("prev:", prevNumber, "oper:", operator, "curr:", currentNumber, "res:", result)
    if (result !== "0") {
      setPrevNumber(result)
    }
  }, [prevNumber, operator, currentNumber, result])

  return (
    <View style={styles}>
      <View style={ROW}>
        <ButtonKey
          style={{ width: 76 * 2 + 8 }}
          buttonColor={color.palette.carbon}
          text="0"
          onPress={() => {
            handleNumber("0")
          }}
        />
        <ButtonKey
          text="."
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber(".")
          }}
        />
        <ButtonKey
          text="="
          onPress={() => {
            calculateResult()
          }}
        />
      </View>
      <View style={ROW}>
        <ButtonKey
          text="1"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("1")
          }}
        />
        <ButtonKey
          text="2"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("2")
          }}
        />
        <ButtonKey
          text="3"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("3")
          }}
        />
        <ButtonKey
          text="+"
          onPress={() => {
            handleOperator("+")
          }}
        />
      </View>
      <View style={ROW}>
        <ButtonKey
          text="4"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("4")
          }}
        />
        <ButtonKey
          text="5"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("5")
          }}
        />
        <ButtonKey
          text="6"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("6")
          }}
        />
        <ButtonKey
          text="-"
          onPress={() => {
            handleOperator("-")
          }}
        />
      </View>
      <View style={ROW}>
        <ButtonKey
          text="7"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("7")
          }}
        />
        <ButtonKey
          text="8"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("8")
          }}
        />
        <ButtonKey
          text="9"
          buttonColor={color.palette.carbon}
          onPress={() => {
            handleNumber("9")
          }}
        />
        <ButtonKey
          text="*"
          onPress={() => {
            handleOperator("*")
          }}
        />
      </View>
      <View style={ROW}>
        <ButtonKey text="AC" buttonColor={color.palette.rainyGrey} onPress={allClear} />
        <ButtonKey text="C" buttonColor={color.palette.rainyGrey} onPress={clear} />
        <ButtonKey
          text="%"
          buttonColor={color.palette.rainyGrey}
          onPress={() => {
            handleOperator("%")
          }}
        />
        <ButtonKey
          text="/"
          onPress={() => {
            handleOperator("/")
          }}
        />
      </View>
      <View style={[ROW, { alignSelf: "flex-end", flexWrap: "wrap", justifyContent: "flex-end" }]}>
        {String(currentNumber + prevNumber).length > 4 ? (
          <>
            <Text style={[RESULT, { fontSize: 48 }]} text={String(prevNumber)} />
            <Text style={[RESULT, { fontSize: 48 }]} text={String(operator)} />
            <Text style={[RESULT, { fontSize: 48 }]} text={String(currentNumber)} />
          </>
        ) : (
          <>
            <Text style={RESULT} text={String(prevNumber)} />
            <Text style={RESULT} text={String(operator)} />
            <Text style={RESULT} text={String(currentNumber)} />
          </>
        )}
      </View>
    </View>
  )
})
