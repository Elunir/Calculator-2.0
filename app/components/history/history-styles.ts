/* eslint-disable react-native/no-color-literals */
import { Dimensions, StyleSheet } from "react-native";
import { color } from "../../theme";

export const style = StyleSheet.create({
    button: {
        borderRadius: 20,
        elevation: 2,
        padding: 10
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      centeredView: {
        backgroundColor: 'rgba(0,0,0,0.87)',
        flex: 1,
        justifyContent: "flex-end"
      },
      close:{
        alignSelf: 'flex-end',
        bottom: 20,
        color: color.palette.carbon,
        left: 20
      },
      delete:{
        alignItems:'center',
        color: 'rgba(255,1,1,0.5)',
        flexDirection:'row',
        justifyContent: 'center'
      },
      modalView: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        elevation: 5,
        height: Dimensions.get('screen').height - 60,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      textStyle: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
      }
})

export default style