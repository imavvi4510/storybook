import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PlusCircle from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../constant/Color'
const ActionButtonRightSide = () => {
  return (
    <View style={styles.floatButton}>
          <PlusCircle name="pluscircle" size={50} color={COLORS.BLUE} />
        </View>
  )
}

export default ActionButtonRightSide

const styles = StyleSheet.create({
  floatButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
})
