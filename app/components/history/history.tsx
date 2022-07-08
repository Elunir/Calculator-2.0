import * as React from "react"
import { StyleProp, View, ViewStyle, Modal, Pressable, Alert, FlatList, Text, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { HistoryCalculations } from "../index"
import css from "./history-styles"
import { useStores } from "../../models"
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
  const styles = Object.assign({}, style)

  const [openModal, setOpenModal] = React.useState(false)

  const { calculatorStore } = useStores()
  const { calculations, deleteAll } = calculatorStore

  const flatListRef = React.useRef(null)

  function deleteHistory() {
    deleteAll()
    setOpenModal(!openModal)
  }

  const HistoryModal = () => {
    return (
      <View style={css.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.")
            setOpenModal(!openModal)
          }}
        >
          <View style={css.centeredView}>
            <View style={css.modalView}>
              <Pressable onPress={() => setOpenModal(!openModal)}>
                <Icon style={css.close} name="close-circle-outline" size={28} />
              </Pressable>
              <FlatList
                data={calculations}
                ref={flatListRef}
                onContentSizeChange={() => flatListRef.current.scrollToEnd()}
                onLayout={() => flatListRef.current.scrollToEnd()}
                renderItem={({ item }) => (
                  <HistoryCalculations
                    history={{
                      firstNumber: item.firstNumber,
                      operator: item.operator,
                      secondNumber: item.secondNumber,
                      result: item.result,
                    }}
                  />
                )}
              />
              <TouchableOpacity style={[css.button, css.delete]} onPress={() => deleteHistory()}>
                <Icon name="delete" size={20} color={"red"} />
                <Text style={css.textStyle}>Delete History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles}>
      <TouchableOpacity
        onPress={() => (calculations.length > 0 ? setOpenModal(!openModal) : undefined)}
      >
        <Icon name="history" color="white" size={36} />
      </TouchableOpacity>
      {openModal ? <HistoryModal /> : null}
    </View>
  )
})
